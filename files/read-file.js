var fs = require('fs');
var data = require('./data.json')
console.log(data.foo);

fs.readFile(__dirname + '/data.json', 'utf-8', function (err, data) {
  var data = JSON.parse(data);
  console.log(data.foo);
});