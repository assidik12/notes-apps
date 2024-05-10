import { findUserByEmail } from "../../controller/users";
import { sign, verify } from "jsonwebtoken";

export const verifyToken = async (token: string) => {
  try {
    const decoded = await verify(token, process.env.JWT_PUBLIC_KEY as string);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false };
  }
};

export const reIssueAccessToken = async (refreshToken: string) => {
  try {
    const { decode }: any = await verifyToken(refreshToken);

    const user = await findUserByEmail(decode.email as string);
    const accessToken = sign({ ...user }, process.env.JWT_PRIVATE_KEY as string, {
      expiresIn: "30d",
      algorithm: "RS256",
    });

    return { accessToken, valid: true };
  } catch {
    return { accessToken: null, valid: false };
  }
};
