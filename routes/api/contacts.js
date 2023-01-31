const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");

const { validation } = require("../../middlewares");
const contactShema = require("../../shemas");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(contactShema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(contactShema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
