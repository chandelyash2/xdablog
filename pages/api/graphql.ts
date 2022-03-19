import {ApolloServer} from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

const app = express();
  const httpServer = http.createServer(app);
  const apolloServer=()=>{
    const server = new ApolloServer({
        // typeDefs,
        // resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      });
      console.log('Server running')
  }
 
  apolloServer()
 

export default httpServer.listen({ path: '/api/graphql' });
