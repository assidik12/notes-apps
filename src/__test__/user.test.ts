import { describe, expect, it, beforeAll } from "@jest/globals";
import { findUserByEmail, generateUser } from "../controller/users";
import { LoginUser, refreshToken, registerUser } from "../service/users";
import { RegisterUserPayload, LoginUserPayload } from "../helpers/utils/interface.type";

const loginPayload: LoginUserPayload = {
  email: "sofi.sidik@gmai.com",
  password: "12345",
};

const Registerpayload: RegisterUserPayload = {
  username: "sidik",
  email: "sofi.sidik230@gmail.com",
  password: "12345",
};

const tokenId =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzb2ZpLnNpZGlrQGdtYWkuY29tIiwidXNlcm5hbWUiOiJzaWRpayIsImlhdCI6MTcxNTA0MjE1NCwiZXhwIjoxNzE1MDQ1NzU0fQ.aT7JPbTQ29iYrppDqZcnKoHefmqOSzZM09r9MnmUg1EcUu-xhoub2UkDHA3w-a6QKn7m7deXJluHQOT0gYSnriz6lQiov8b5KHKo-UFKmPg8ic-BkdOy5Vk37YyyMZX82zo-pWC94yfNwzICcjsvYeKbb7EzhRXkNhr7Qut-njYr3OeIrvBhcoMgQ94PTiutZH-bTb3ndGqi5--Ra4bLKCV55SCu6ON6dy3drhDbZbjO21fXMLlMzcikVhKyMXZ9hUkQ0vCATLT14dBQOI3-d2PnCI9u9AqGKYsNqdSOfe8o3XDDqf2flfCAb0y5OlmYb561QeLJs0xYuTrX4Kqkug";

describe("findUserByEmail", () => {
  it("should find user by email", async () => {
    const user = await findUserByEmail("sofi.sidik@gmai.com");
    expect(user).toBeDefined();
  });
  it("testing find user login in service layer", async () => {
    const loginUser = await LoginUser(loginPayload);
    expect(loginUser).toBeDefined();
  });
  it("testing refresh token in service layer", async () => {
    const token = await refreshToken(tokenId);
    expect(token).toBeDefined();
  });
});

describe("createNewUser", () => {
  it("should generate user", async () => {
    const user = await generateUser(Registerpayload);
    expect(user).toBeDefined();
  });
  it("testing register user in service layer", async () => {
    const user = await registerUser(Registerpayload);
    expect(user).toBeDefined();
  });
});
