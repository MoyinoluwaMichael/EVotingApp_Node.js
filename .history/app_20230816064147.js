require('dotenv').config();
const Party = require

const sequelize = require("./src/data/database/mySqlConnector")
const Voter = require("./src/routers/voter")
const Party = require("./src/routers/party")
const Vote = require("./src/routers/vote")

const express = require("express");
const app = express();
app.use(express.json());
app.use("/api/v1/parties", Party)

const port = process.env.MySqlDbPort;

const startApp = async ()=>{
    try {
        await sequelize.sync();
        console.log("Database synced successfully");
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(`Error syncing database: ${error}`);
    }
}

startApp();