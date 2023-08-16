const Party = require("../data/models/party");

const createParty = async (request, response) => {
    const {acronym, partyName, flagBearer} = request.body;
    try {
        Party.create({
            acronym: acronym,
            partyName: partyName,
            flagBearer
        })
    } catch (error) {
        
    }
}