const sd = require('silly-datetime');
const md5 = require('md5');

const d = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
const m = md5('123456');

console.log(d, m);
