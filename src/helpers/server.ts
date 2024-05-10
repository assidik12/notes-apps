import express, { Express, Request, Response, IRoute } from "express";
import { router } from "../routers/users";
import { noteRoute } from "../routers/note";
import deserialize from "../middlewares/deserialize";

/**
 * Create server
 * @returns {Express} The Express server
 */
const app = express();

const createServer = (): Express => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(deserialize);
  app.use("/api/users", router);
  app.use("/api/notes", noteRoute);

  return app;
};
const route = express.Router();
route.get("/", (req: Request, res: Response) => {});

export const appListen = (port: number) => {
  createServer();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
