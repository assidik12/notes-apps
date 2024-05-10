import express, { IRouter, Request, Response } from "express";
import { Createnote, GetNotes, DeleteNote, Updatenote } from "../service/notes";
const noteRoute: IRouter = express.Router();
import { Notebooks } from "../helpers/utils/interface.type";
import { requireUser } from "../middlewares/auth";

noteRoute.route("/").get(requireUser, async (req: Request, res: Response) => {
  const { result, status, succes } = await GetNotes(req.body.email);

  if (succes) {
    res.status(status).json({ message: "get notes success", result });
  } else {
    res.status(status).json({ message: "get notes failed", result });
  }
});

noteRoute.route("/create").post(requireUser, async (req: Request, res: Response) => {
  const { title, userEmail, content } = req.body;
  const q: Notebooks = {
    title,
    userEmail,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const { result, status, succes } = await Createnote(q);
  if (succes) {
    res.status(status).json({ message: "create notes success", result });
  } else {
    res.status(status).json({ message: "create notes failed", result });
  }
});

noteRoute.route("/update").post(requireUser, async (req: Request, res: Response) => {
  const { title, userEmail, content } = req.body;
  const q: Notebooks = {
    title,
    userEmail,
    content,
  };
  try {
    const { result, status, succes } = await Updatenote(q);
    if (succes) {
      res.status(status).json({ message: "update notes success", result });
    } else {
      res.status(status).json({ message: "update notes failed", result });
    }
  } catch (error) {
    res.status(500).json({ message: "update notes failed", error });
  }
});

noteRoute.route("delete").delete(requireUser, async (req: Request, res: Response) => {
  const { status, succes, result } = await DeleteNote(req.body.id);
  if (succes) {
    res.status(status).json({ message: "delete notes success", result });
  } else {
    res.status(status).json({ message: "delete notes failed", result });
  }
});
export { noteRoute };
