import * as fs from 'fs'

const readFile = (fileName) => {
  if (fs.existsSync(fileName)) {
    return fs.readFileSync(fileName, 'utf-8')
  }
}

const writeFile = (filePath, file) => {
  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file)
  }
}

const isFile = (path) => {
  return fs.statSync(path).isFile()
}

const isDirectory = (path) => {
  return fs.statSync(path).isDirectory()
}

export { readFile, writeFile, isFile, isDirectory }
