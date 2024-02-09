const express = require('express');
const app = express();
const port = 3000;


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const fs = require('fs');
const input = fs.readFileSync('data.txt');

app.get('/', (req, res) => {
  
  
  res.type('.html');
  

  res.send(input);
  res.end();
})

app.post('/chat',(req,res)=>{
  const text = ': ' + req.body.chat + ' , ';
  console.log(text);
  fs.appendFileSync('data.txt', text)
  
  res.redirect('/');
  
})


app.get('/login',(req,res)=>{
  res.type('.html');

  res.end('<form id="myForm" action="/login/details" method="POST"><label for="login">Username : </label><input type="text" name="title" id="login" /><button type="submit">Login</button></form><script>let form = document.getElementById("myForm");form.addEventListener("submit", loginData);function loginData(e) {e.preventDefault; let username = document.getElementById("login").value;localStorage.setItem("username", username);}</script>')
})

app.post('/login/details', (req,res)=>{
   
  // console.log(req.body.title);
  res.redirect('/');
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})