const Party = require("../data/models/party");

const createParty = async (request, response) => {
  const { acronym, partyName, flagBearer } = request.body;
  try {
    const createdParty = await Party.create({
      acronym: acronym,
      partyName: partyName,
      flagBearer: flagBearer,
    });
    response.status(201).json(createdParty);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'An error occurred while creating the party.' });
  }
};

const getAllParties = async (request, response) => {
  try {
    const allParties = await Party.get();
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'An error occurred while creating the party.' });    
  }
}
module.exports = {createParty, getAllParties};
