const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','P@$$w0rd',{
 host:'localhost',
 dialect:'mysql'
});

module.exports = connection;