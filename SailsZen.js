const fs = require('fs')
const colors = require("colors/safe")

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

  fs.writeFile(filepath, JSON.stringify(contents, null, 4), err => {
    if (err) {
      console.log(colors.red("error writing file", err))
    } else {
      console.log(colors.green("Created file .sailsrc from template"))
    }
  })
}

module.exports.writeFile = (filename, filepath) => {

  switch(filename) {
    case ".sailsrc":
        writeSailsrc(filepath)
        break;
    default:
        console.log(`No file generator exists for ${filename}`)
  }

}

