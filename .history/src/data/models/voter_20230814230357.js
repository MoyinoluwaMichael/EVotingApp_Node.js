const {DataTypes} = require("sequelize");
const sequelize = require("../database/mySqlConnector")

const Voter = sequelize.define("Voter", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    vote: {
        type: DataTypes.in
    }
})

module.exports = Voter;