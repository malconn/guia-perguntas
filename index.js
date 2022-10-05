const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const perguntaModel = require('./database/Pergunta');
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
 res.render('index');
});
app.get('/perguntar',(req,res)=>{
 res.render('perguntar');
});

app.post('/salvarpergunta',(req,res)=>{
 const titulo = req.body.titulo;
 const descricao = req.body.descricao;
 res.send(`Formulário recebido! ${titulo} ${descricao}`);
})

app.listen(8080,()=>{
 console.log('App rodando');
});