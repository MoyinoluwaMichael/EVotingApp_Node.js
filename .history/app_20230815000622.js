const sequelize = require("./src/data/database/mySqlConnector")
const Voter = require("./src/data/models/voter")
const Voter = require("./src/data/models/party")

const startApp = async ()=>{
    try {
        await sequelize.sync();
        console.log("Database synced successfully");
    } catch (error) {
        console.log(`Error syncing database: ${error}`);
    }
}

startApp();