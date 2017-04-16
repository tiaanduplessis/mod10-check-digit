#!/usr/bin/env node
'use strict'

const mod10CheckDigit = require('./')
const arg = process.argv[2]

console.log(mod10CheckDigit(arg))
