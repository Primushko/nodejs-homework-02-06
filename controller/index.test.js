const mongoose = require("mongoose");
const request = require("supertest");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const path = require("path");
const Users = require("../servise/schemas/users");
const app = require("../app");
const { DB_HOST, PORT } = process.env;

describe("test auth route", () => {
  let server;
  beforeAll(() => (server = app.listen(PORT)));
  afterAll(() => server.close());
  beforeEach((done) => {
    mongoose.connect(DB_HOST).then(() => done());
  });

  test("test signup", async () => {
    const password = "1111111";
    const email = "test1112@gmail.com";
    const hash = await bcrypt.hash(password, 10);
    await Users.create({ email, password: hash });
    const response = await request(app)
      .post("/users/login")
      .send({ email, password });

    const { token, user } = response.body;
    expect(response.statusCode).toBe(200);
    expect(token).not.toBe("");
    expect(Object.keys(user)).toEqual(["email", "subscription", "avatarURL"]);
    expect(typeof user.email == "string").toEqual(true);
    expect(typeof user.subscription == "string").toEqual(true);
  });
});
