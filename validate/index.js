const contactPostSchema = require("./contactPostSchema.js");
const contactPutSchema = require("./contactPutSchema.js");
const contactFavoriteSchema = require("./contactFavoriteSchema.js");

const usersPostSchema = require("./usersPostSchema");
const usersSubscSchema = require("./usersSubscSchema");
const usersVerifySchema = require("./verifyEmailPostSchema");
module.exports = {
  contactPostSchema,
  contactPutSchema,
  contactFavoriteSchema,
  usersPostSchema,
  usersSubscSchema,
  usersVerifySchema,
};
