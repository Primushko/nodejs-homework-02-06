const service = require("../../service");

const removeContact = async (req, res, next) => {
  try {
    const data = await service.removeContact(req.params.id);
    if (data) {
      res.status(200).json({ message: "contact deleted" });
      return;
    }
    throw new Error("Not found");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = removeContact;
