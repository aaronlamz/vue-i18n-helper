import * as fs from 'fs'

function readFile(fileName) {
  if (fs.existsSync(fileName)) {
    return fs.readFileSync(fileName, 'utf-8')
  }
}

function writeFile(filePath, file) {
  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file)
  }
}

function isFile(path) {
  return fs.statSync(path).isFile()
}

function isDirectory(path) {
  return fs.statSync(path).isDirectory()
}

export { readFile, writeFile, isFile, isDirectory }
