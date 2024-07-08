const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', //dialect is stated, but error says dialect needs to be explicitly supplied 
  }
)


//create new DB if it does not exist
// sequelize.query('CREATE DATABASE IF NOT EXISTS ecommerce_db;').then(() => {
//   console.log('Database created');
// }); Definitely not right, I think

// //reestablish connection to the new DB
// sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_HOST,
//   process.env.DB_USER,
//   process.env.DB_PW,
//   {
//     dialect: 'mysql',
//   }
// )


    // try {
    //   await sequelize.authenticate();
    //   console.log('Connection has been established successfully.');
    // } catch (error) {
    //   console.error('Unable to connect to the database:', error);
    // }

module.exports = sequelize;
