const crypto = require('crypto');
const ITERATIONS = 1000;
const SALT_SIZE = 24;
const HASH_SIZE = 24;

exports.hashPassword = (password, salt) => {
 const saltBuffer = new Buffer(salt, 'hex');
 return crypto.pbkdf2Sync(password, saltBuffer, ITERATIONS, HASH_SIZE, 'sha1').toString("hex");
}
