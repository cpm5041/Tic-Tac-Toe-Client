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
let winner = null
let currentPlayer = player1

const setUpGameboard = function () {
  for (let i = 0; i < gameCellIds.length; i++) {
    const elementId = gameCellIds[i]
    const element = document.getElementById(elementId)
    element.addEventListener('click', updateCell)
  }
}
const checkForWinner = function () {
  const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  winningLines.forEach(function (line) {
    const cell1 = line[0]
    const cell2 = line[1]
    const cell3 = line[2]
    if (currentPlayer === bCheck[cell1] && bCheck[cell1] === bCheck[cell2] && bCheck[cell2] === bCheck[cell3]) {
      winner = currentPlayer
      console.log('Winner!')
    }
  })
}

let bCheck = []

const updateCell = function () {
  const id = this.id
  const index1 = id.split('-')
  const index = index1[1]
  gameObject.game.cells[index] = currentPlayer
  bCheck = [
    $('#box-0').html(),
    $('#box-1').html(),
    $('#box-2').html(),
    $('#box-3').html(),
    $('#box-4').html(),
    $('#box-5').html(),
    $('#box-6').html(),
    $('#box-7').html(),
    $('#box-8').html()]
  checkForWinner()
}
const clickValue = function () {
  $(this).html(currentPlayer = currentPlayer === player1 ? player2 : player1)
  $(this).unbind()
  return clickValue
}
$('.box').on('click', clickValue())
$('.box').on('click', function (){
  $('#newGame').on('click', function () {
      $('.box').text('')
      console.log('new game clicked')
})

// add event listener, it was called back
module.exports = {
  setUpGameboard
}
