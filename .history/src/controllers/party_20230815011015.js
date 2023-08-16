const Party = require("../data/models/party");

const createParty =  (request, response) => {
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

console.log(createParty);

module.exports = createParty;
