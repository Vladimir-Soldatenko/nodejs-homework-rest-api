const contacts = require("../../models/contacts");

const addContact = async (req, res, next) => {
  const { body } = req;
  const result = await contacts.addContact(body);
  res.status(201).json({
    status: "success",
    code: "201",
    data: result,
  });
};
module.exports = addContact;
