const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define("respostas",{
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  questionId:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Resposta.sync({force:false});

module.exports = Resposta;