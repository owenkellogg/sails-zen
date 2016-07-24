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

function writeSailsrc(inputPath) {
  const filepath = inputPath || __dirname + '/.sailsrc'

  var err = copyTemplate("sailsrc", filepath)

  log('.sailsrc', err)
}

function writeDockerfile(inputPath) {
  const filepath = inputPath || __dirname + '/Dockerfile'

  var err = copyTemplate("Dockerfile", filepath)

  log('Dockerfile', err)
}

module.exports.writeFile = (filename, filepath) => {

  switch(filename) {
    case ".sailsrc":
        writeSailsrc(filepath)
        break;
    case "Dockerfile":
        writeDockerfile(filepath)
        break;
    default:
        console.log(`No file generator exists for ${filename}`)
  }

}

