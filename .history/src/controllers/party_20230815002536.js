const Party = require("../data/models/party");

const createParty = async (request, response) => {
  const { acronym, partyName, flagBearer } = request.body;
  try {
    const createdParty = Party.create({
      acronym: acronym,
      partyName: partyName,
      flagBearer: flagBearer,
    });
    r
  } catch (error) {}
};
