const crypto = require('crypto')
const data = require("./exp/data.json")

const private_info = JSON.parse(data[0].value.KeyringController.vault)
const password = ""

const key = crypto.pbkdf2Sync(password, private_info.salt, private_info.keyMetadata.params.iterations, 32, 'sha256')
const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(private_info.iv, 'base64'))

let decrypted = decipher.update(private_info.data, 'base64', 'utf8')
decrypted += decipher.final('utf8')

console.log(decrypted)