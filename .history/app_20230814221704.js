const sequelize = require("./src/data/database/mySqlConnector")

const startApp = async ()=>{
    try {
        sequelize.sync();
    } catch (error) {
        
    }
}