const express = require("express");
const router = express.Router();

const {createParty} = require("../controllers/party");  
console.log(cr\);
router.route("/").post(createParty);

module.exports = router;