let express = require('express');
let app = express();

let bodyParser = require('body-parser');



app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next()
}
  )
.use(bodyParser.urlencoded({extended: false}))

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

app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({time: req.time})
})

app.get('/:word/echo', (req, res) => {
  let word = {echo: req.params.word}
  res.json(word)
})

app.get('/name', (req, res) => {
  let string = req.query.first + " " + req.query.last;
  res.json({ name: string})
})




















 module.exports = app;
