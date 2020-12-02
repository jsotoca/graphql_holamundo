import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import GRAPHQLHTTP, { graphqlHTTP } from 'express-graphql';

const app = express();
app.use('*',cors());
app.use(compression());

const typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCurso:String!
    }
`
const resolvers:IResolvers = {
    Query: {
        hola(): string{
            return 'hola mundo';
        },
        holaConNombre(__: void,{ nombre }): string{
            return `hola ${nombre}`;
        },
        holaAlCurso(): string{
            return 'hola al curso de GraphQL'
        }
    }
}

const schema:GraphQLSchema = makeExecutableSchema({typeDefs,resolvers}); 

app.use('/',graphqlHTTP({
    schema,
    graphiql:true
}));

const PORT = 5300;
app.listen(
    {port:PORT},
    () => console.log(`Servidor Express corriendo http://localhost:${PORT}`)
);