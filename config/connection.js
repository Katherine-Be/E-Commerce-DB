require('dotenv').config();

const Sequelize = require('sequelize');

console.log(process.env);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.PORT
  }
);

    // try {
    //   await sequelize.authenticate();
    //   console.log('Connection has been established successfully.');
    // } catch (error) {
    //   console.error('Unable to connect to the database:', error);
    // }

module.exports = sequelize;
