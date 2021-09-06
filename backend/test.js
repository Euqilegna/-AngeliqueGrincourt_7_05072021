
const dotenv = require('dotenv')
dotenv.config()
const MyCrypto = require("./src/tools/crypto");
const crypto = new MyCrypto();

const mail = "test@test.fr"
const encrypt = crypto.encrypt(mail);

console.log(encrypt)

console.log(crypto.decrypt(encrypt))