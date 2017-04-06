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
const gameObject = {
  'game': {
    'id': 3,
    'cells': ['', '', '', '', '', '', '', '', ''],
    'over': false,
    'player_x': {
      'id': 1,
      'email': 'and@and.com'
    },
    'player_o': null
  }
}
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
  console.log(currentPlayer)
  const id = this.id
  console.log('this element id = ' + id)
  const index1 = id.split('-')
  const index = index1[1]
  console.log(index)
  gameObject.game.cells[index] = currentPlayer
  console.log('gameObject', gameObject)
}

const clickValue = function () {
  $(this).html(currentPlayer = currentPlayer === player1 ? player2 : player1)
  $(this).val(currentPlayer)
  $(this).unbind()
  // console.log($(this))
  $(this).val($(this))
  return clickValue
}
$('.box').on('click', clickValue())

// add event listener, it was called back
module.exports = {
  setUpGameboard
}
