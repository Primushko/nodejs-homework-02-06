const express = require("express");
const {
  get,
  getById,
  create,
  remove,
  update,
  favorite,
} = require("../../controller");
const {
  contactPutSchema,
  contactPostSchema,
  contactFavoriteSchema,
} = require("../../validate");

const router = express.Router();

router.get("/", get);
router.get("/:id", getById);
router.patch("/:id/favorite", contactFavoriteSchema, favorite);
router.post("/", contactPostSchema, create);
router.put("/:id", contactPutSchema, update);
router.delete("/:id", remove);
// const {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// } = require("../../models/contacts");
// const { contactPutSchema, contactPostSchema } = require("../../validate");
// const { v4: uuidv4 } = require("uuid");

// const router = express.Router();

// router.get("/", async (req, res, next) => {
//   try {
//     const contacts = await listContacts();
//     return res.status(200).json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const contact = await getContactById(id);
//     res.status(200).json(contact);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

// router.post("/", contactPostSchema, async (req, res, next) => {
//   const body = req.body;
//   try {
//     const newContact = await addContact({ id: uuidv4(), ...body });
//     res.status(201).json(newContact);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     await removeContact(id);
//     res.status(200).json({ message: "contact deleted" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

// router.put("/:id", contactPutSchema, async (req, res, next) => {
//   const { id } = req.params;
//   const body = req.body;

//   try {
//     if (Object.keys(body).length === 0) {
//       res.status(400).json({ message: "missing fields" });
//       return;
//     }
//     const putContact = await updateContact(id, body);
//     res.status(200).json(putContact);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

module.exports = router;
