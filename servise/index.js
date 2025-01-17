const Contacts = require("./schemas/contact");
const Users = require("./schemas/users");

const getAllContacts = async ({ owner, skip, limit, favorite }) => {
  return Contacts.find(
    favorite ? { owner, favorite } : { owner },
    "-createdAt -updatedAt"
  )
    .populate("owner", "email subscription -_id")
    .skip(skip)
    .limit(limit);
};

const getByIdContact = async ({ id, owner }) => {
  return Contacts.findOne({ _id: id, owner });
};

const createContact = async ({ body, owner }) => {
  return Contacts.create({ ...body, owner });
};

const removeContact = async ({ id, owner }) => {
  return Contacts.findByIdAndRemove({ _id: id, owner });
};

const updateContact = async ({ id, body, owner }) => {
  return Contacts.findByIdAndUpdate({ _id: id, owner }, body, { new: true });
};
const updateStatusContact = async ({ id, body, owner }) => {
  return Contacts.findByIdAndUpdate({ _id: id, owner }, body, { new: true });
};
// Домашнє завдання №4  -validateEmail-createUser-updateUserToken-findByIdUser-updateSubscription

const validateEmail = (email) => {
  const user = Users.findOne({ email });
  return user;
};
const createUser = async ({ email, password, verificationToken }) => {
  const result = await Users.create({ email, password, verificationToken });
  return result;
};
const updateUserToken = ({ id, token }) => {
  const result = Users.findByIdAndUpdate(id, { token: token }, { new: true });
  return result;
};
const findByIdUser = ({ id }) => {
  const result = Users.findById(id);
  return result;
};
const updateSubscription = ({ id, subscription }) => {
  const result = Users.findByIdAndUpdate(id, { subscription }, { new: true });
  return result;
};
const findVerificationToken = async ({ verificationToken }) => {
  const result = await Users.findOne({ verificationToken });
  return result;
};
const findUserIDandUpdateVerify = async ({
  id,
  verificationToken = null,
  verify = true,
}) => {
  const result = await Users.findByIdAndUpdate(
    id,
    { verificationToken, verify },
    { new: true }
  );
  return result;
};
const updateAvatar = async ({ id, avatarURL }) => {
  const result = await Users.findByIdAndUpdate(
    id,
    { avatarURL },
    { new: true }
  );
  return result;
};
module.exports = {
  getAllContacts,
  getByIdContact,
  createContact,
  removeContact,
  updateContact,
  updateStatusContact,
  validateEmail,
  createUser,
  updateUserToken,
  findByIdUser,
  updateSubscription,
  updateAvatar,
  findVerificationToken,
  findUserIDandUpdateVerify,
};
