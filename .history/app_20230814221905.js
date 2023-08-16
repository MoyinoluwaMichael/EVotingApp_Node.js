const sequelize = require("./src/data/database/mySqlConnector")

const startApp = async ()=>{
    try {
        sequelize.sync();
        console.log("Database synced successfully");
    } catch (error) {
        console.log("Error syncing database");
    }
}

startApp();