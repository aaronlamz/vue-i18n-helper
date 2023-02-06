import * as fs from 'fs'

const readFile = (fileName: string) => {
  if (fs.existsSync(fileName)) {
    return fs.readFileSync(fileName, 'utf-8')
  }
}

const writeFile = (filePath: string, file: any) => {
  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file)
  }
}

const isFile = (path: string) => {
  return fs.statSync(path).isFile()
}

const isDirectory = (path: string) => {
  return fs.statSync(path).isDirectory()
}

export { readFile, writeFile, isFile, isDirectory }
