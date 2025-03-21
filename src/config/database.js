const { Sequelize } = require('sequelize');
const initModels = require('../domain/models/init-models');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false
  });

  const models = initModels(sequelize);

  module.exports = {sequelize, models};