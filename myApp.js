let express = require('express');
let app = express();

console.log("Hello World")

// app.get('/', function(req, res) {
//   res.send('Hello Express');
// }
// )

console.log(_dirname)

app.get('/', function(req, res){
  res.sendFile(_dirname + '/views/index.html')
})



























 module.exports = app;
