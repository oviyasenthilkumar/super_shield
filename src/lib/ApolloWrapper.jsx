"use client";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";

export default function ApolloWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
