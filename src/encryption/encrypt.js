'use strict'

const crypto = require('crypto')
const algorithm = 'aes-256-ctr'

module.exports = function encrypt(text) {
  const cipher = crypto.createCipher(algorithm, process.env.SECRET_KEY)
  let encryptedText = cipher.update(text, 'utf8', 'hex')
  encryptedText += cipher.final('hex')

  return encryptedText
}
