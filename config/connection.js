require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.DB_URL //if DB_URL is provided
  ? new Sequelize(process.env.DB_URL)//directly use it to creat Sequelize instnace
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {//
    //if DB_URL isnt given, then use DB_NAME, DB_USER, & DB_PASSWORD
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,//ensures decimal numbers are handled with precision using the 'decimal.js'
        //library of sequelize which helpsavoid issue realted to precision when working with decimals in a db
      },
    });

module.exports = sequelize;
