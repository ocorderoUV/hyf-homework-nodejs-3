var express = require('express');
var app = express();

const users=[];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', function(req,res){
      res.send(users)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});