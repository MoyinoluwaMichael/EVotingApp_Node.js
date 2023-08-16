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
    },
    age: {
        
    }
})

module.exports = Voter;