fs = require('fs');
data = fs.readdirSync('/', {withFileTypes: true});
console.log('data: ', data);