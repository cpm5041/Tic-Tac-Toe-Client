'use strict'

const config = require('./config')
const store = require('./store')

const submitMove = (data) => {
  const game = store.game
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  submitMove
}
