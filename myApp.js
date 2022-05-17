let express = require('express');
let app = express();


app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next()
}
  )
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

app.use('/public', express.static(pathToStylesheet))        
// app.get('/json', (req, res) => {
//   res.send({"message": "Hello json"})
// })

app.get('/json', (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase') {
   res.json({"message": "HELLO JSON"}) 
  } else {
    res.json({"message": "Hello json"} )
  }  
})























 module.exports = app;
