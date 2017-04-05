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
const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1

// On document ready

$('.box').on('click', function () {
  $(this).html(currentPlayer)
  // console.log($('#modalNameInput').val())
})
