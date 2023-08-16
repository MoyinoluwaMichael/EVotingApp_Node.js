const sequelize = require("../database/mySqlConnector");
const {DataTypes} = require("sequelize");
const Vote = require("./vote");

const Party = sequelize.define("Party", {
    acronym: {
        type: DataTypes.STRING
    },
    partyName: {
        type: DataTypes.STRING
    },
    flagBearer: {
        typeDataTypes.STRING
    },
})

Party.hasMany(Vote);

module.exports = Party;