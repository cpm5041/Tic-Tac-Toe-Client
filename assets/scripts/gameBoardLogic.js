'use strict'

// const api = require('../auth/api')
// const ui = require('../auth/ui')
// const events = require('../auth/events.js')

const gameCellIds = [
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
const player1 = 'X'
const player2 = 'O'
let winner = null
let currentPlayer = player1

const setUpGameboard = function () {
  $('.game-board').hide()
  $('.newGame').hide()
  $('.signOut').hide()
  $('.pw').hide()
  for (let i = 0; i < gameCellIds.length; i++) {
    const elementId = gameCellIds[i]
    const element = document.getElementById(elementId)
    $(element).on('click', clickValue)
  }
}
// const resetBoard = function () {
//   for (let i = 0; i < gameCellIds.length; i++) {
//     const elementId = gameCellIds[i]
//     const element = document.getElementById(elementId)
//     element.addEventListener('click', updateCell)
//   }
// }
const checkForWinner = function () {
  // create array of winning index combinations
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  // run the forEach method on each line of the array
  winningLines.forEach(function (line) {
    // check cells 1, 2, 3 for each of the winning arrays to see if any match
    const cell1 = line[0]
    const cell2 = line[1]
    const cell3 = line[2]
    // if current player (x or o) matches all three, assign them as a winner
    if (currentPlayer === bCheck[cell1] && bCheck[cell1] === bCheck[cell2] && bCheck[cell2] === bCheck[cell3]) {
      winner = currentPlayer
      // change the header to show the winner
      $('.welcome').text(winner + ' is the winner!')
      $('.box').off('click')
      console.log('winner rannn')
      return
    } else {
      if (bCheck.every(x => x !== '&nbsp;')) {
        $('.welcome').text('We have a draw!')
        return
      }
    }
  })
}

let bCheck = []

const updateCell = function (cell) {
  // grab elementID of the box clicked
  const id = cell.id
  // parse the ID since it is a string
  const index1 = id.split('-')
  // grab the second value in the new array which will be used as an index
  const index = index1[1]
  // the index of the cell we click will be returned as current player (x or o)
  gameObject.game.cells[index] = currentPlayer
  // fill the board check array with values that are being clicked dynamically
  bCheck = [
    $('#box-0').html(),
    $('#box-1').html(),
    $('#box-2').html(),
    $('#box-3').html(),
    $('#box-4').html(),
    $('#box-5').html(),
    $('#box-6').html(),
    $('#box-7').html(),
    $('#box-8').html()
  ]
  $('#game-info').submit()
  // run the check for winner function
  console.log('about to check for winner')
  checkForWinner()
}

const clickValue = function (e) {
  if (e.target.innerHTML === '&nbsp;') {
    $(this).html(currentPlayer = currentPlayer === player1 ? player2 : player1)
    updateCell(e.target)
  }
}

module.exports = {
  setUpGameboard,
  clickValue,
  player1,
  currentPlayer,
  gameCellIds,
  updateCell,
  checkForWinner
}
