const fs = require('fs');
const path = require('path');

const riottxt = fs.readFileSync(path.resolve(__dirname, 'riot.txt'), 'utf8').trim();

const message = () => {
  console.log(riottxt);
};

message();

module.exports = message;
