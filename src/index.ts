import dotenv from "dotenv";
import { appListen } from "./helpers/server";
const port = 3000;

dotenv.config();
appListen(port);
