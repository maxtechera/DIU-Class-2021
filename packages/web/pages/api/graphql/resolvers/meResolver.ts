// import { User } from "../models";
const meResolver = (_: any, args: any, ctx: any) => {
  if (ctx.user) {
    return ctx.models.User.findOne({ _id: ctx.user._id }).exec();
  }
};

export default meResolver;
