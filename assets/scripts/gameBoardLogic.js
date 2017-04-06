'use strict'

let gameCellIds = [
  'box-0',
  'box-1',
  'box-2',
  'box-3',
  'box-4',
  'box-5',
  'box-6',
  'box-7',
  'box-8'
]
// let boardIndex =
const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1

const setUpGameboard = function () {
  console.log('setUpGameboard ran')
  for (let i = 0; i < gameCellIds.length; i++) {
    const elementId = gameCellIds[i]
    const element = document.getElementById(elementId)
    element.addEventListener('click', updateCell)
  }
}

const updateCell = function () {
  console.log('updateCell ran!')
}

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

// add event listener, it was called back
module.exports = {
  setUpGameboard
}
