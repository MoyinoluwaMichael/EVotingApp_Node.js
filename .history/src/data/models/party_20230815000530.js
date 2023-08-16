const sequelize = require("../database/mySqlConnector");
const {DataTypes} = require("sequelize");
const Vote = require("./vote");

const Party = sequelize.define("Party", {
    acronym: DataTypes.STRING,
    partyName: DataTypes.STRING,
    flagBearer: DataTypes.STRING,
})

