'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const game = require('../gameBoardLogic.js')

const onSignUp = function (event) {
  // this here is pointing to event.target from last lesson
  // grabbing all data out of the form, putting it into object
  const data = getFormFields(event.target)
  console.log('sign up ran')
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  console.log('sign in ran')
  // this here is pointing to event.target from last lesson
  // grabbing all data out of the form, putting it into object
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

// send update of current gameboard (PATCH)
const onSubmitMove = function (event) {
  event.preventDefault()
  const id = getFormFields(event.target)
  const player = $('#move_marker_form').val()
  const index = $('#index_form').val()
  console.log(index)
  console.log(player)
  let data = {
    'game': {
      'cell': {
        'index': index,
        'value': player
        //  'value': $('#index_form').text
      },
      'over': false
    }
  }
  api.submitMove(data)
    .then(ui.submitSuccess)
    .catch(ui.submitFailure)
}
const onGetIndex = function (event) {
  event.preventDefault()
  api.indexGame()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}
// api.index()
//    .then(ui.getStatsSuccess)
//    .catch(ui.getStatsSuccess)

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('.box').on('click', game.clickValue)
  $('#create').on('click', onCreate)
  $('.box').on('click', onSubmitMove)
  $('#game-info').on('submit', onSubmitMove)
  $('#game-statistics').on('submit', onGetIndex)
}

module.exports = {
  addHandlers,
  onCreate,
  onSubmitMove
}
