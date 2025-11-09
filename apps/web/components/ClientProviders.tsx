"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient"; // adjust if your client path differs

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}