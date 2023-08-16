const Sequelize = require("sequelize")
const databaseConfiguration = require("../../configurations/dbConfig.json")[0];

const sequelize = new Sequelize(
    databaseConfiguration.
)