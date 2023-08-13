const service = require("../../service");

const getById = async (req, res, next) => {
  try {
    const contact = await service.getByIdContact(req.params.id);
    if (contact) {
      res.status(200).json(contact);
      return;
    }
    throw new Error("Not found");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getById;
