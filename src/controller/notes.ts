import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

import { Notebooks } from "../helpers/utils/interface.type";

export const createNote = async (reqLocals: Notebooks) => {
  const { title, userEmail, createdAt, content } = reqLocals;
  const result = await prisma.notebook.create({
    data: {
      title,
      content,
      userEmail,
      createdAt,
    },
  });
  return {
    status: result ? 200 : 400,
    result: result ? result : null,
  };
};

export const getNotesByEmail = async (userEmail: any) => {
  try {
    const result = await prisma.notebook.findMany({
      where: {
        userEmail,
      },
      select: {
        userEmail: true,
        title: true,
        content: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return {
      status: 200,
      result,
    };
  } catch (error) {
    return {
      status: 400,
      error,
    };
  }
};

export const updateNote = async (reqLocals: any) => {
  const { userEmail, title, content } = reqLocals;
  const result = await prisma.notebook.updateMany({
    where: {
      userEmail: userEmail,
    },
    data: {
      title,
      content,
      updatedAt: new Date(),
    },
  });
  return {
    status: 200,
    result,
  };
};

export const deleteNote = async (id: number) => {
  const result = await prisma.notebook.deleteMany({
    where: {
      id,
    },
  });
  return {
    status: result ? 200 : 400,
    result: result ? result : null,
  };
};
