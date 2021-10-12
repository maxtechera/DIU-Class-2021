import { ApolloServer } from "apollo-server-micro";
import jwt from "jsonwebtoken";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import cookies from "./cookies";

const getUser = (req: any) => {
  const token = req.cookies.token;
  if (token) {
    const user = jwt.verify(token, "secret");
    return user;
  }

  return {
    id: 1,
    name: "Max",
    username: "max",
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return {
      cookie: res.cookie,
      user: getUser(req),
    };
  },
});

server.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = server.createHandler({ path: "/api/graphql" });

export default cookies(handler);
