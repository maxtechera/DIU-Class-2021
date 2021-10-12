const meResolver = (_: any, args: any, ctx: any) => {
  return ctx.user;
};

export default meResolver;
