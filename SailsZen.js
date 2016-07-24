const fs = require('fs')
const colors = require("colors/safe")

function log(filename, error) {
  if (error) {
    console.log(colors.red(`Error writing file ${filename}`, err))
  } else {
    console.log(colors.green(`Created file ${filename} from template`))
  }
}

function writeSailsrc(inputPath) {

  const contents = {
    "generators": {
      "modules": {}
    },
    "hooks": {
      "grunt": false
    },
    "paths": {
      "public": "assets"
    }
  }

  const filepath = inputPath || __dirname + '/.sailsrc'

  var err = fs.writeFileSync(filepath, JSON.stringify(contents, null, 4))
  log('.sailsrc', err)
}

function writeDockerfile(path) {

  const contents = fs.readFileSync(__dirname+'/templates/Dockerfile')

  var err = fs.writeFileSync(path || __dirname+'/Dockerfile', contents)

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

