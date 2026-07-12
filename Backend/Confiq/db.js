const Sequelize = require('sequelize');

const db = new Sequelize('zamato', 'root', 'Kshitiz@28', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

 

module.exports = db;