const express = require("express");
const router = express.Router();

const {createParty} = require("../controllers/party");  
log
router.route("/").post(createParty);

module.exports = router;