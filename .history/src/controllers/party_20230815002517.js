const Party = require("../data/models/party");

const createParty = async (request, response) => {
    const {acronym, partyName, flagBearer} = request.body;
    try {
        const Party.create({
            acronym: acronym,
            partyName: partyName,
            flagBearer: flagBearer,
        });
    } catch (error) {
        
    }
}