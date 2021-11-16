import { User } from "../models";
const meResolver = (_: any, args: any, ctx: any) => {
  if (ctx.user) {
    return User.findOne({ _id: ctx.user._id }).exec();
  }
};

export default meResolver;
