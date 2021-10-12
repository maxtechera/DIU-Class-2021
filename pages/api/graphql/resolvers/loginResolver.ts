import { User } from "../models";
import jwt from "jsonwebtoken";

const loginResolver = async (_: any, args: any, ctx: any) => {
  const { username, password } = args?.input;

  const user = await User.findOne({ username });

  // TODO: Compara encriptado
  if (user?.password === password) {
    const token = jwt.sign(user.toObject(), "secret");
    ctx.cookie("token", token);
    return user;
  }
};

export default loginResolver;
