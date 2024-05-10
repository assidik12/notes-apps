import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../helpers/utils/jwt";

const deserialize = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken: any = req.headers.authorization?.replace("Bearer ", "");
  if (!accessToken) {
    next();
  }

  const token: any = await verifyToken(accessToken);

  if (token.decode) {
    res.locals.user = token.decode;
    return next();
  }
  if (token.expired) {
    return next();
  }
  return next();
};

export default deserialize;
