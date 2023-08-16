const Sequelize = require("sequelize")
const databaseConfiguration = require("../../configurations/dbConfig.json").development;

const sequelize = new Sequelize(
    databaseConfiguration.database,
    databaseConfiguration.username,
    databaseConfiguration.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
)