const express = require('express');
const app = express();

//use o ejs como view engine
app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/:nome/:lang',(req,res)=>{
 const nome = req.params.nome;
 const lang = req.params.lang;
 const exibirMsg = true;
 const produtos = [
  {nome:'Doritos',preco:3.14},
  {nome:'Coca-cola',preco:5},
  {nome:'Carne',preco:15},
  {nome:'Redbull',preco:6},
  {nome:'Leite',preco:1.45}
 ]


 res.render('index',{
  nome:nome,
  lang:lang,
  empresa:'Malcon Dev',
  msg: exibirMsg,
  produtos:produtos
 });
});

app.listen(8080,()=>{
 console.log('App rodando');
});