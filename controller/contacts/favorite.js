const service = require("../../service");

const updateFavoriteStatus = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    if (Object.keys(body).length === 0) {
      res.status(400).json({ message: "missing field favorite" });
      return;
    }

    const data = await service.updateStatusContact(id, body);
    res.status(200).json({ ...data["_doc"], ...body });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = updateFavoriteStatus;
