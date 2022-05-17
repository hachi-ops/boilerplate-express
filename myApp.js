let express = require('express');
let app = express();

console.log("Hello World")

// app.get('/', function(req, res) {
//   res.send('Hello Express');
// }
// )

// console.log(_dirname)

absolutePath = __dirname + '/views/index.html'

app.get('/', function(req, res){
  res.sendFile(absolutePath)
})



























 module.exports = app;
