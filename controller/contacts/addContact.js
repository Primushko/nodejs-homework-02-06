const service = require("../../servise");

const addContact = async (req, res, next) => {
  try {
    const newContact = await service.createContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addContact;
