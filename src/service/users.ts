type Register = {
  username: string;
  email: string;
  password: string;
};

import { compare, genSalt, hash } from "bcrypt";
import { generateUser, findUserByEmail } from "../controller/users";
import { sign } from "jsonwebtoken";
import { reIssueAccessToken } from "../helpers/utils/jwt";
import { LoginUserPayload } from "../helpers/utils/interface.type";

export const registerUser = async ({ username, email, password }: Register) => {
  try {
    const hashedPassword = await hash(password, await genSalt(10));
    const result = await generateUser({ username, email, password: hashedPassword });
    return {
      status: result ? 201 : 400,
      message: result ? "User created successfully" : "User already exists",
      data: result,
    };
  } catch {
    return { status: 500, message: "error server" };
  }
};

export const LoginUser = async (payload: LoginUserPayload) => {
  const { email, password } = payload;

  try {
    const result: any = await findUserByEmail(email);

    if (result) {
      const chekPass: boolean = await compare(password, result.password);

      if (chekPass === true) {
        const payload = { id: result.id, email: result.email, username: result.username };
        const privat_key = process.env.JWT_PRIVATE_KEY || "secret";

        const token = sign(payload, privat_key, {
          algorithm: "RS256",
          expiresIn: "1h",
        });
        return {
          status: token ? 200 : 401,
          message: token ? "Login success" : "Login failed",
          token: token ? token : null,
        };
      }
    }
  } catch (err: any) {
    return {
      err: err?.message,
      status: 500,
      message: "error server",
    };
  }
};

export const refreshToken = async (token: any) => {
  try {
    const { accessToken } = await reIssueAccessToken(token);
    return {
      accessToken,
      status: 200,
      message: "refresh token",
    };
  } catch (err: any) {
    return {
      token: null,
      status: 400,
      message: "token is not valid",
    };
  }
};
