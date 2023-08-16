const sequelize = require("../database/mySqlConnector");
const {DataTypes} = require("sequelize");
const Vote = require("./vote");

const Party = sequelize.define("Party", {
    acronym: {
        type: DataTypes.STRING
        not
    },
    partyName: {
        type: DataTypes.STRING
    },
    flagBearer: {
        type: DataTypes.STRING
    },
})

Party.hasMany(Vote);

module.exports = Party;