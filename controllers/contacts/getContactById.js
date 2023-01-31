const contacts = require("../../models/contacts");
const createError = require("http-errors");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw createError(404, `contact with id=${contactId} not found`);
  } else {
    res.status(200).json({
      status: "success",
      code: "200",
      data: result,
    });
  }
};

module.exports = getContactById;
