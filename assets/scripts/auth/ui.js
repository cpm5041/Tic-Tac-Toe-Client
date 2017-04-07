'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (data) => {
  console.log('sign in success ran. data: ', data)
  // store whatver you get back from the request so you can use it later
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('sign in failure ran. data: ', error)
}
const signOutSuccess = () => {
  console.log('sign in success ran and nothing was returned')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
  // store whatver you get back from the request so you can use it later
  // store.user = data.user
}

const signOutFailure = (error) => {
  console.error('sign in failure ran. data: ', error)
}
const changePasswordSuccess = (data) => {
  console.log('Change password worked!')
  // store whatver you get back from the request so you can use it later
}

const changePasswordFailure = (error) => {
  console.error('Change password failure ran. data: ', error)
}
const createSuccess = (data) => {
  console.log(data)
  store.game = data.game
}

const createFailure = (error) => {
  console.error('error! ' + error)
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
  createFailure
}
