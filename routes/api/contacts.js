const express = require("express");
const {
  addContact,
  getById,
  removeContact,
  updateContact,
  updateFavoriteStatus,
  getAllContacts,
} = require("../../controller/contacts");
const {
  contactPutSchema,
  contactPostSchema,
  contactFavoriteSchema,
} = require("../../validate");

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:id", getById);
router.patch("/:id/favorite", contactFavoriteSchema, updateFavoriteStatus);
router.post("/", contactPostSchema, addContact);
router.put("/:id", contactPutSchema, updateContact);
router.delete("/:id", removeContact);

module.exports = router;
