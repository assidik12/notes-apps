import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();
import { RegisterUserPayload } from "../helpers/utils/interface.type";

export const generateUser = async (payload: RegisterUserPayload) => {
  const user = await prisma.user.create({
    data: {
      username: payload.username,
      email: payload.email,
      password: payload.password,
    },
  });
  return user;
};

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return user;
  2;
};
