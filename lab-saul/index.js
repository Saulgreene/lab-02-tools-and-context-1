'use strict';

const fp = require('./lib/fp.js');

const main = module.exports = () => {
  let result = process.argv;
  result = fp.map(result, something => something.toUpperCase());
  console.log(result);
};

main();
