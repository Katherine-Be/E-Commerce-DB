require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3306;


async function startServer() {
  try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    // Sync sequelize models to the database, then turn on the server
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1)
  }
}
startServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// // sync sequelize models to the database, then turn on the server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });
// // app.listen(PORT, () => {
// //   console.log(`App listening on port ${PORT}!`);
// // });



