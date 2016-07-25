const fs = require('fs')
const colors = require("colors/safe")

function log(filename, error) {
  if (error) {
    console.log(colors.red(`Error writing file ${filename}`, err))
  } else {
    console.log(colors.green(`Created file ${filename} from template`))
  }
}

function copyTemplate(templateName, filepath) {
  
  const contents = fs.readFileSync(`${__dirname}/templates/${templateName}`)
  return fs.writeFileSync(filepath, contents)
}

function writeFile(filename, outputPath) {
  const filepath = outputPath || `${process.cwd()}/${filename}`
  var err = copyTemplate(filename, filepath)

  log(filename, err)
}

module.exports.writeFile = (filename, filepath) => {

  switch(filename) {
    case ".sailsrc":
        writeFile('.sailsrc', filepath)
        break;
    case "Dockerfile":
        writeFile('Dockerfile', filepath)
        break;
    default:
        console.log(`No file generator exists for ${filename}`)
  }

}

