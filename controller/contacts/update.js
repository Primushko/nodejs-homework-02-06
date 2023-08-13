const service = require("../../service");

const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  try {
    if (Object.keys(body).length === 0) {
      res.status(400).json({ message: "missing fields" });
      return;
    }

    const putContact = await service.updateContact(id, body);
    res.status(200).json({ ...putContact["_doc"], ...body });
  } catch (error) {
    if (error.message.includes("Cast to ObjectId failed for value")) {
      res.status(400).json({ message: `Not found this id: ${id}` });
      return;
    }

    res.status(404).json({ message: error.message });
  }
};

module.exports = updateContact;
