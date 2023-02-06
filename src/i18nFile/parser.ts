import * as fs from 'fs'
import * as path from 'path'
import * as babylon from 'babylon'
import traverse from 'babel-traverse'
import * as babel from 'babel-core'

let ID = 0
// parse file and dependents
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })
  const dependencies = []
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value)
    }
  })
  const id = ID++
  const { code } = babel.transformFromAst(ast, null, {
    // presets: ['@babel/preset-env']
  })
  return {
    id,
    filename,
    dependencies,
    code
  }
}

// create dependents graph
export function createGraph(entry) {
  const mainAssets = createAsset(entry)
  const queue = [mainAssets]
  for (const asset of queue) {
    const dirname = path.dirname(asset.filename)
    asset.mapping = {}
    asset.dependencies.forEach((relativePath) => {
      const absolutePath = path.join(dirname, relativePath)
      const child = createAsset(absolutePath)
      asset.mapping[relativePath] = child.id
      queue.push(child)
    })
  }
  return queue
}

// package dependented files into sigle file
export function bundle(graph: any) {
  let modules = ''
  graph.forEach((mod: any) => {
    modules += `${mod.id}:[
      function(require,module,exports){
        ${mod.code}
      },
      ${JSON.stringify(mod.mapping)}
    ],`
  })
  const result = `
   (function(modules){
     function require(id){
       const [fn, mapping] = modules[id];

       function localRequire(relativePath){
         return require(mapping[relativePath])
       }

       const module = {exports:{}};

       fn(localRequire,module,module.exports)

       return module.exports;
     }
     require(0);
   })({${modules}})
   `
  return result
}
