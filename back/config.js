const Sequelize = require('sequelize');

module.exports = new Sequelize('ynov-tests', 'root', '',{
    host:'localhost',
    dialect:'mysql',
    port: 3306,
    logging: false
})

