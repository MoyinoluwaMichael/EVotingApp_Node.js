const express = require("express");
const router = express.Router();

const 
{
    createParty,
    getAllParties,
} = require("../controllers/party");  

router.route("/").post(createParty).get(getAllParties);

module.exports = router;