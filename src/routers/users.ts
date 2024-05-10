import express, { IRouter, Request, Response } from "express";
import { LoginUser, registerUser, refreshToken } from "../service/users";
import { requireUser } from "../middlewares/auth";
const router: IRouter = express.Router();

router.route("/register").post(async (req: Request, res: Response) => {
  const user: any = await registerUser(req.body);
  if (user.status === 400) {
    res.status(user.status).json({ data: user.data, message: user.message });
  } else if (user) {
    res.status(user.status).json({ data: user.data, message: user.message });
  } else {
    res.status(user.status).json({ data: user.data, message: user.message });
  }
});

router.route("/login").post(async (req: Request, res: Response) => {
  const user: any = await LoginUser(req.body);
  if (user) {
    res.status(user.status).json({ token: user.token, message: user.message });
  } else if (user.status === 401) {
    res.status(user.status).json({ token: user.token, message: user.message });
  } else {
    res.status(user.status).json({ token: user.token, message: user.message });
  }
});
router.route("/refreshToken").post(requireUser, async (req: Request, res: Response) => {
  const user: any = await refreshToken(req.body.token);
  if (user) {
    res.status(user.status).json({ accesToken: user.token, message: user.message });
  } else if (user.status === 401) {
    res.status(user.status).json({ accesToken: user.token, message: user.message });
  }
});

export { router };
