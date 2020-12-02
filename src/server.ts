import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema/index';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const app = express();
app.use('*',cors());
app.use(compression());

const server = new ApolloServer({
    schema,
    introspection:true
});

server.applyMiddleware({ app });
const httpServer = createServer(app);

const PORT = 5300;
httpServer.listen(
    {port:PORT},
    () => console.log(`Servidor GraphlQL corriendo http://localhost:${PORT}/graphql 🚀`)
);