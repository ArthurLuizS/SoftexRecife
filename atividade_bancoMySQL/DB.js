const Sequelize = require('sequelize')

const sequelize = new Sequelize('softex', 'root', '', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;