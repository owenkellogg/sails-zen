const assert = require("assert")
const SailsZen = require("../SailsZen") 
const fs = require("fs")

const filepath = __dirname + '/tmp/.sailsrc'

describe("sailsrc generation", () => {

  it("should generate a sailsrc file that disables grunt", () => {

    SailsZen.writeFile(".sailsrc", filepath)

    console.log(fs.readFileSync("/Users/stevenzeiler/github/stevenzeiler/sails-zen/test/tmp/.sailsrc"))

    var contents = JSON.parse("{}")

    assert.strictEqual(contents.hooks.grunt, false)
  })

  after(() => {

  })
})

