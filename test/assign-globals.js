"use strict"

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const td = require('testdouble')

chai.use(chaiAsPromised)
td.config({ignoreWarnings: true})

Object.assign(global, {
  assert: chai.assert,
  expect: chai.expect,
  td
})

process.on('uncaughtException', function (err) {
  console.error('uncaughtException')
  console.error(err.stack)
})

process.on('unhandledRejection', function (err) {
  console.error('unhandledRejection')
  console.error(err.stack)
})
