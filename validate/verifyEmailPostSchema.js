const Joi = require("joi");
const schema = Joi.object({
  email: Joi.string().email().required(),
});
const usersVerifySchema = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).json({ message: "missing required field email" });
  }
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = usersVerifySchema;
