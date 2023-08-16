const sequelize = require("../database/mySqlConnector");
const {DataTypes} = require("sequelize");
const Vote = require("./vote");

const Party = sequelize.define("Party", {
    acronym: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    partyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    flagBearer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

Party.hasMany(Vote);

module.exports = Party;