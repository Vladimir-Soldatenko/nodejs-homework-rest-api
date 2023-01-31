const contacts = require("../../models/contacts");

const getAll = async (req, res, next) => {
  const allContacts = await contacts.listContacts();
  res.status(200).json(allContacts);
};

module.exports = getAll;
