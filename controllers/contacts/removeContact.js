const contacts = require("../../models/contacts");
const createError = require("http-errors");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw createError(404, `element with id='${contactId}' not found`);
  } else {
    res.status(200).json({
      status: "Contact deleted",
      code: "200",
      data: result,
    });
  }
};

module.exports = removeContact;
