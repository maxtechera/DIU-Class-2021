// import { User } from "../models";

const signupResolver = async (_: any, args: any, ctx: any) => {
  const { username, name, password } = args?.input;

  // Encriptar la password antes de guardarla
  const user = new ctx.models.User({ username, name, password });
  await user.save();
  return user;
};

export default signupResolver;
