"use strict";
import config from "./config";

import express from "express";
import http from "http";
import connectToDb from "./database";

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

import Schema from "./Schema";
import Resolvers from "./Resolvers";

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);

  await connectToDb();

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;

  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send("Hello!");
    res.end();
  });

  await new Promise<void>(
    (resolve) => httpServer.listen({ port: config.port }, resolve) //run the server on port 4000
  );

  console.log(`Server ready at http://localhost:${config.port}${server.graphqlPath}`);
}

//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Resolvers);
