var express = require('express');
var app = express();

var users=[];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/user', function(req,res){
  users.push(req.body)
  res.status(200).json({
    users
  })
  users = [{id:0}] 
})

app.get('/users', function(req,res){
  res.send(users)
})

app.get('/user/:id',function(req,res){
  const user = users.find(us => us.id == req.params.id);
    res.json({
        id: 0
    });
})

app.delete('/user/:id', function (req, res) {
  const user = users.find(us => us.id == req.params.id);
  if (user){
    res.status(202).json({
      success: true,
      message: 'Si existe el usuario',
      user
    })
    users.pop();
  } else {
    res.status(204).json({
         success: false,
         message: 'password and username do not match'
    })
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});