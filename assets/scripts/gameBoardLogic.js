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
const wins = 0
let currentPlayer = player1

const setUpGameboard = function () {
  console.log('setUpGameboard ran')
  for (let i = 0; i < gameCellIds.length; i++) {
    const elementId = gameCellIds[i]
    const element = document.getElementById(elementId)
    element.addEventListener('click', updateCell)
  }
}

// const checkWinner = function () {
//   if (gameObject.game.cells[index] !== '') {
//     let winning_lines = [
      // [0, 1, 2],
      // [3, 4, 5],
      // [6, 7, 8],
      // [0, 3, 6],
      // [1, 4, 7],
      // [2, 5, 8],
      // [0, 4, 8],
      // [2, 4, 6]
//     ]
//     winning_lines.forEach(function (line) {
//       let cell1 = line[0]
//       let cell2 = line[1]
//       let cell3 = line[2]
//       if (current_player === board[cell1] && board[cell1] === board[cell2] && board[cell2] === board[cell3]) {
//         winner = current_player
//       }
//     })
//   }
// }
let bCheck = []
let winner = null

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
  for (let i = 0; i < bCheck.length; i++) {
    if (bCheck[0] === '' || bCheck[1] === '' || bCheck[2] === '') {
      continue
    } else {
      console.log(bCheck[0] + bCheck[1] + bCheck[2])
      if (bCheck[0] === bCheck[1] && bCheck[0] === bCheck[2]) {
        console.log('WINNER')
      } else {
        console.log('shits broke')
      }
    }
  }
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
