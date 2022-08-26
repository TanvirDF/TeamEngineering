// const chai = require("chai");
// const { expect } = require("chai");
// const chaiHttp = require("chai-http");
// const bcrypt = require("bcrypt");

// const server = require("../server.js");

// const Auth = require("../models/auth.model.js");

// const DBUtils = require("../utils/DBUtils.js");

// const testAuth = require("../utils/data/testAuth.json");

// chai.use(chaiHttp);

// xdescribe("Auth Routes Tests", () => {
//   let users;

//   before(async () => await DBUtils.connect(process.env.DB_URI));

//   beforeEach(async () => {
//     if (!DBUtils.isConnected()) await DBUtils.connect(process.env.DB_URI);
//     await DBUtils.depopulate(Auth);

//     const hashedUsers = testAuth.map((user) => ({ ...user, password: bcrypt.hashSync(user.password, 8) }));
//     users = await DBUtils.populate(Auth, hashedUsers);
//     users = users.map((user) => JSON.parse(JSON.stringify(user)));
//   });

//   after(async () => {
//     if (!DBUtils.isConnected()) await DBUtils.connect(process.env.DB_URI);
//     await DBUtils.depopulate(Auth);
//   });

//   describe("POST /login", () => {
//     const validLogin = {
//       email: "meliott@gmail.com",
//       password: "reverseit",
//     };

//     describe("success", () => {
//       it("should return 200", async () => {
//         const res = await chai
//           .request(server)
//           .post("/login")
//           .type("form")
//           .send(validLogin);

//         expect(res).to.have.status(200);
//       });

//       describe("failure", () => {

//         it("should return 400 if login details are incorrect", async () => {
//           const res = await chai
//             .request(server)
//             .post("/login")
//             .type("form")
//             .send({ ...validLogin, email: "not@valid" });

//           expect(res).to.have.status(400);
//         });

//         it("should return 400 if user does not exist", async () => {
//           const res = await chai
//             .request(server)
//             .post("/login")
//             .type("form")
//             .send({ ...validLogin, email: "user@fail.com" })

//           expect(res).to.have.status(400);
//         });

//         it("should return 400 if password is invalid", async () => {
//           const res = await chai
//             .request(server)
//             .post("/login")
//             .type("form")
//             .send({ ...validLogin, password: "passwordFailure" })

//           expect(res).to.have.status(400);
//         });
//       })
//     })
//   })
// });
