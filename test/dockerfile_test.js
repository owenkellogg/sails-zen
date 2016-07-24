const assert = require("assert")
const SailsZen = require("../SailsZen") 
const fs = require("fs")

const filepath = __dirname + '/tmp/Dockerfile'

describe("sailsrc generation", () => {

  it("should generate a sailsrc file that disables grunt", () => {

    SailsZen.writeFile("Dockerfile", filepath)

    var contents = fs.readFileSync(filepath).toString()

    assert(contents.match("npm install -g sails"))
  })

  after(() => {
    fs.unlink(filepath)
  })
})

