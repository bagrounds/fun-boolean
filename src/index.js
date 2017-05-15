/**
 * Functions for working with Booleans.
 * Functions with multiple arguments are curried.
 *
 * @module fun-boolean
 */
;(function () {
  'use strict'

  /* imports */
  var curry = require('fun-curry')
  var guarded = require('guarded')

  var boolsToBool = guarded(allBools, isBoolean)
  var boolArrayToBool = guarded(isBoolArray, isBoolean)

  function isBoolArray (array) {
    return array[0].map(isBoolean).reduce(and, true)
  }

  function allBools (array) {
    return array.reduce(function (result, element) {
      return result && isBoolean(element)
    }, true)
  }

  /* exports */
  module.exports = {
    and: curry(boolsToBool(and)),
    or: curry(boolsToBool(or)),
    not: boolsToBool(not),
    xor: curry(boolsToBool(xor)),
    t: t,
    f: f,
    truthy: truthy,
    falsey: falsey,
    isBoolean: isBoolean,
    equal: curry(boolsToBool(equal)),
    all: boolArrayToBool(all),
    any: boolArrayToBool(any),
    none: boolArrayToBool(none)
  }

  /**
   *
   * @function module:fun-boolean.none
   *
   * @param {Array<Boolean>} bools - to check
   *
   * @return {Boolean} if no bools are true
   */
  function none (bools) {
    return all(bools.map(not))
  }

  /**
   *
   * @function module:fun-boolean.any
   *
   * @param {Array<Boolean>} bools - to check
   *
   * @return {Boolean} if any bools are true
   */
  function any (bools) {
    return bools.reduce(or, false)
  }

  /**
   *
   * @function module:fun-boolean.all
   *
   * @param {Array<Boolean>} bools - to check
   *
   * @return {Boolean} if all bools are true
   */
  function all (bools) {
    return bools.reduce(and, true)
  }

  /**
   *
   * @function module:fun-boolean.falsey
   *
   * @param {*} anything - to check
   *
   * @return {Boolean} if anything is falsey
   */
  function falsey (anything) {
    return !anything
  }

  /**
   *
   * @function module:fun-boolean.truthy
   *
   * @param {*} anything - to check
   *
   * @return {Boolean} if anything is truthy
   */
  function truthy (anything) {
    return !!anything
  }

  /**
   *
   * @function module:fun-boolean.isBoolean
   *
   * @param {*} anything - to check
   *
   * @return {Boolean} if anything is a Boolean
   */
  function isBoolean (anything) {
    return typeof anything === 'boolean'
  }

  /**
   *
   * @function module:fun-boolean.and
   *
   * @param {Boolean} a - input
   * @param {Boolean} b - input
   *
   * @return {Boolean} a && b
   */
  function and (a, b) {
    return a && b
  }

  /**
   *
   * @function module:fun-boolean.or
   *
   * @param {Boolean} a - input
   * @param {Boolean} b - input
   *
   * @return {Boolean} a || b
   */
  function or (a, b) {
    return a || b
  }

  /**
   *
   * @function module:fun-boolean.not
   *
   * @param {Boolean} b - input
   *
   * @return {Boolean} !b
   */
  function not (b) {
    return !b
  }

  /**
   * Exclusive or. Returns true if a or b is true, but not both.
   *
   * @function module:fun-boolean.xor
   *
   * @param {Boolean} a - input
   * @param {Boolean} b - input
   *
   * @return {Boolean} a !== b
   */
  function xor (a, b) {
    return a !== b
  }

  /**
   * aka xnor
   *
   * @function module:fun-boolean.equal
   *
   * @param {Boolean} a - input
   * @param {Boolean} b - input
   *
   * @return {Boolean} a === b
   */
  function equal (a, b) {
    return a === b
  }

  /**
   * Always returns true
   *
   * @function module:fun-boolean.t
   *
   * @return {Boolean} true
   */
  function t () {
    return true
  }

  /**
   * Always returns false
   *
   * @function module:fun-boolean.f
   *
   * @return {Boolean} false
   */
  function f () {
    return false
  }
})()

