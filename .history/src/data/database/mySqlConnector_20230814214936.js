const Sequelize = require("sequelize")
const databaseConfiguration = require("../../configurations/dbConfig.json")["development"]

const sequelize = new Sequelize()