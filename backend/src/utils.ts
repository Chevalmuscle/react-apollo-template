import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { User } from "./models/User";

function getToken({ id, email, password }: User) {
  return jwt.sign({ id, email, password }, JWT_SECRET, { expiresIn: "1d" });
}

function getUserFromToken(token: string) {
  try {
    const { id, email }: any = jwt.verify(token, JWT_SECRET);
    return { id, email };
  } catch {
    return null;
  }
}

export { getToken, getUserFromToken };
