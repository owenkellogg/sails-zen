#!/usr/bin/env node

const SailsZen = require("../SailsZen")
const colors = require("colors/safe")

console.log(colors.white.underline("Glamifying your Sailsjs app..."))
console.log()

SailsZen.writeFile(".sailsrc")
SailsZen.writeFile("Dockerfile")

console.log()

