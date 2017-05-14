;(function () {
  'use strict'

  /* imports */
  var predicate = require('fun-predicate')
  var object = require('fun-object')
  var funTest = require('fun-test')
  var arrange = require('fun-arrange')

  var equalityTests = [
    [[undefined], true, 'falsey'],
    [[null], true, 'falsey'],
    [[{}], true, 'truthy'],
    [[[]], true, 'truthy'],
    [[0], true, 'falsey'],
    [[1], true, 'truthy'],
    [[''], true, 'falsey'],
    [[' '], true, 'truthy'],
    [[false], true, 'isBoolean'],
    [[true], true, 'isBoolean'],
    [[{}], false, 'isBoolean'],
    [[[]], false, 'isBoolean'],
    [[undefined], false, 'isBoolean'],
    [[null], false, 'isBoolean'],
    [[5], false, 'isBoolean'],
    [['true'], false, 'isBoolean'],
    [[], false, 'f'],
    [[], true, 't'],
    [[false], true, 'not'],
    [[true], false, 'not'],
    [[false, false], true, 'equal'],
    [[false, true], false, 'equal'],
    [[true, false], false, 'equal'],
    [[true, true], true, 'equal'],
    [[false, false], false, 'xor'],
    [[false, true], true, 'xor'],
    [[true, false], true, 'xor'],
    [[true, true], false, 'xor'],
    [[false, false], false, 'or'],
    [[false, true], true, 'or'],
    [[true, false], true, 'or'],
    [[true, true], true, 'or'],
    [[false, false], false, 'and'],
    [[false, true], false, 'and'],
    [[true, false], false, 'and'],
    [[true, true], true, 'and']
  ].map(arrange({ inputs: 0, predicate: 1, contra: 2 }))
    .map(object.ap({
      predicate: predicate.equalDeep,
      contra: object.get
    }))

  /* exports */
  module.exports = equalityTests.map(funTest.sync)
})()

