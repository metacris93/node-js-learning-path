var fs = require('fs');
var data = {
  name: 'Bob'
}
fs.writeFile(__dirname + '/writable.json', JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log('the file has been saved!');
});