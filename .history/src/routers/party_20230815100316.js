const express = require("express");
const router = express.Router();

const 
{createParty,
    get
} = require("../controllers/party");  

router.route("/").post(createParty).get();

module.exports = router;