const sequelize = require("./src/data/database/mySqlConnector")
const Voter = require("./src/data/models/voter")
const Party = require("./src/data/models/party")
const Vote = require("./src/data/models/vote")

const express = require

const startApp = async ()=>{
    try {
        await sequelize.sync();
        console.log("Database synced successfully");
    } catch (error) {
        console.log(`Error syncing database: ${error}`);
    }
}

startApp();