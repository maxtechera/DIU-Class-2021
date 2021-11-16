import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql",
  credentials: "same-origin",
  cache: new InMemoryCache(),
});

export default client;
