const sequelize = require("./src/data/database/mySqlConnector")
const Voter = require("./src/data/models/voter")
const Party = require("./src/data/models/party")
const Vote = require("./src/data/models/vote")

const express = require("express");
const { json } = require("sequelize");
const app = express();
app.use(json());
app.use("/api/v1/parties", Party)

const port = process.env.MySqlDbPort;

const startApp = async ()=>{
    try {
        await sequelize.sync();
        console.log("Database synced successfully");
        app.listen()
    } catch (error) {
        console.log(`Error syncing database: ${error}`);
    }
}

startApp();