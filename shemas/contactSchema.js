const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().trim().required().min(2).alphanum(),
  email: Joi.string()
    .trim()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  phone: Joi.string().trim().required().min(9).max(13),
});

module.exports = contactSchema;
