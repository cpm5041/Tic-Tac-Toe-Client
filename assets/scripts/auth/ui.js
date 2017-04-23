'use strict'

const store = require('../store')
const game = require('../gameBoardLogic.js')

const signUpSuccess = (data) => {
  $('.userNotification').text('Sign-up Successful! Sign in to play!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.userNotification').text('Sign-up Failed! Try Again!')
}
const signInSuccess = (data) => {
  // console.log('sign in success ran. data: ', data)
  $('.welcome').text('Play some Tic-Tac-Toe!')
  $('.userNotification').text('Sign-in Successful! Lets Play!')
  $('.newGame').show()
  $('.signOut').show()
  $('.pw').show()
  $('.sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('sign in failure ran. data: ', error)
  $('.userNotification').text('Sign-in Failed! Try again')
}
const signOutSuccess = () => {
  $('.userNotification').text('Signed out! Sign back in to play!')
  $('.welcome').text('')
  $('#sign-in').show()
  $('#sign-up').show()
  $('.pw').hide()
  $('#sign-out').hide()
  $('.newGame').hide()
  $('.game-board').hide()
  $('.newGame').hide
  $('.stats').text('')
  $('.box').text('&nbsp;')
  $('.box').html('&nbsp;')
  store.user = null
}

const signOutFailure = (error) => {
  $('.userNotification').text('Signed out failed!')
  console.error('sign in failure ran. data: ', error)
}
const changePasswordSuccess = (data) => {
  $('.userNotification').text('Password Changed! Sign in to play!')
  $('.welcome').text('')
  $('#sign-in').show()
  $('.game-board').hide()
  $('.newGame').hide()
  $('.newGame').hide
  $('.stats').text('')
  $('.box').text('&nbsp;')
  $('.box').html('&nbsp;')
  $('.pw').trigger('reset')
  // console.log('Change password worked!')
  // store whatver you get back from the request so you can use it later
}

const changePasswordFailure = (error) => {
  $('.userNotification').text('Password Change failed, try again!')
  console.error('Change password failure ran. data: ', error)
}
const createSuccess = (data) => {
  $('.welcome').text('Play some Tic-Tac-Toe!')
  $('.box').text('&nbsp;')
  $('.box').html('&nbsp;')
  $('.game-board').show()
  $('#stats').show()
  $('.box').on('click', game.clickValue)
  store.game = data.game
}

const createFailure = (error) => {
  console.error('error! ' + error)
}
const submitSuccess = (id) => {
  // store whatver you get back from the request so you can use it later
}

const submitFailure = (error) => {
  console.error('Submit failure ran. data: ', error)
}

const indexSuccess = (data) => {
  store.games = data.games
  // const gameCount = data.games.length
  // console.log('game count is ', data.games.length)
  $('#games-played').text('Games completed: ' + data.games.length)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createSuccess,
  createFailure,
  submitSuccess,
  submitFailure,
  indexSuccess
}
