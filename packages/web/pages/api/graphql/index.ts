import { ApolloServer } from "apollo-server-micro";
import jwt from "jsonwebtoken";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import cookies from "./cookies";
import corsConstructor from "micro-cors";
import { send } from "micro";
import { User } from "./models";

const cors = corsConstructor();

const getUser = (req: any) => {
  let token = req.cookies.token ?? req.headers.authorization;
  if (token) {
    if (token?.includes("Bearer ")) {
      token = token.split("Bearer ")[1];
    }
    const user = jwt.verify(token, "secret");
    return user;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return {
      models: { User },
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

export default cookies(
  cors((req, res) =>
    req.method === "OPTIONS" ? send(res, 200, "ok") : handler(req, res)
  )
);
