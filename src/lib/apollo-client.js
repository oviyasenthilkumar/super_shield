import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://my-wp-site.local/graphql", 
  cache: new InMemoryCache(),
});

export default client;
