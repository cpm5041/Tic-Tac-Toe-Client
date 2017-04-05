'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
$(() => {
  authEvents.addHandlers()
})

let empty = ''
let board = [empty, empty, empty, empty, empty, empty, empty, empty, empty]

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1

const clickValue = function () {
  $(this).html(currentPlayer = currentPlayer === player1 ? player2 : player1)
  $(this).val(currentPlayer)
  $(this).unbind()
  console.log($(this).val())
  console.log($(this))
  $(this).val($(this))
  return clickValue
}
$('.box').on('click', clickValue())
