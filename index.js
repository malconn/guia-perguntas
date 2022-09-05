const express = require('express');
const app = express();

//use o ejs como view engine
app.set('view engine','ejs');

app.get('/:nome/:lang',(req,res)=>{
 const nome = req.params.nome;
 const lang = req.params.lang;
 const exibirMsg = true;
 res.render('index',{
  nome:nome,
  lang:lang,
  empresa:'Malcon Dev',
  msg: exibirMsg
 });
});

app.listen(8080,()=>{
 console.log('App rodando');
});