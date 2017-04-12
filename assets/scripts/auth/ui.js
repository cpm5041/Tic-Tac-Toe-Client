'use strict'

const store = require('../store')
const game = require('../gameBoardLogic.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('.userNotification').text('Sign-up Successful! Sign in to play!')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.userNotification').text('Sign-up Failed! Try Again!')
}
const signInSuccess = (data) => {
  console.log('sign in success ran. data: ', data)
  $('.welcome').text('Play some Tic-Tac-Toe!')
  $('.userNotification').text('Sign-in Successful! Lets Play!')
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('sign in failure ran. data: ', error)
  $('.userNotification').text('Sign-in Failed! Try again')
}
const signOutSuccess = () => {
  $('.userNotification').text('Signed out!')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
  // store whatver you get back from the request so you can use it later
  // store.user = data.user
}

const signOutFailure = (error) => {
  $('.userNotification').text('Signed out failed!')
  console.error('sign in failure ran. data: ', error)
}
const changePasswordSuccess = (data) => {
  $('.userNotification').text('Password Changed!')
  console.log('Change password worked!')
  // store whatver you get back from the request so you can use it later
}

const changePasswordFailure = (error) => {
  $('.userNotification').text('Password Change failed, try again!')
  console.error('Change password failure ran. data: ', error)
}
const createSuccess = (data) => {
  console.log(data)
  $('.welcome').text('Play some Tic-Tac-Toe!')
  // $('.box').on('click')
  store.game = data.game
  game.currentPlayer = game.player1
}

const createFailure = (error) => {
  console.error('error! ' + error)
}
const submitSuccess = (data) => {
  console.log('submitSuccess worked!')
  console.log(data)
  // store whatver you get back from the request so you can use it later
}

const submitFailure = (error) => {
  console.error('Submit failure ran. data: ', error)
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
  submitFailure
}
