const contacts = require("../../models/contacts");
const createError = require("http-errors");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;

  const result = await contacts.updateContact(contactId, body);

  if (!result) {
    throw createError(404, `element with id='${contactId}' not found`);
  }
  res.status(200).json({
    status: "success",
    code: "200",
    data: result,
  });
};

module.exports = updateContact;
