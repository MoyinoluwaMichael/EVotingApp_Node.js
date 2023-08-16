const Party = require("../data/models/party");

const   reateParty = async (request, response) => {
  const { acronym, partyName, flagBearer } = request.body;
  try {
    const createdParty = await Party.create({
      acronym: acronym,
      partyName: partyName,
      flagBearer: flagBearer,
    });
    response.status(201).json({createParty})
  } catch (error) {}
};

module.exports = createParty;