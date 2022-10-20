const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
//Database
connection.authenticate().then(()=>{
 console.log("Conexão feita com o banco de dados!")
}).catch((error)=>{
 console.log(error);
})

//use o ejs como view engine
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
 Pergunta.findAll({ raw: true }).then(questionslist =>{
  res.render('index',{
   questionslist:questionslist
  });
 })
});
app.get('/perguntar',(req,res)=>{
 res.render('perguntar');
});

app.post('/salvarpergunta',(req,res)=>{
 const title = req.body.title;
 const description = req.body.description;
 
 Pergunta.create({
  title:title,
  description:description
 }).then(()=>{
  res.redirect('/')
 })
})

app.listen(8080,()=>{
 console.log('App rodando');
});