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

pathToStylesheet = __dirname + '/public'

app.use('/public', (req, res) => {
       res.send(express.static)
})
        



























 module.exports = app;
