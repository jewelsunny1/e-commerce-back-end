const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize= require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(()=>{//setting to true is fine to drop tables in development mde
  //but in deployment you want to set force:false so you dont lose data
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
