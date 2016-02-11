'use strict'

const crypto = require('crypto')
const algorithm = 'aes-256-ctr'

module.exports = function decrypt(encryptedText) {
  const decipher = crypto.createDecipher(algorithm, process.env.SECRET_KEY)
  var decryptedText = decipher.update(encryptedText, 'hex', 'utf8')
  decryptedText += decipher.final('utf8')

  return decryptedText
}
