import { IResolvers } from "graphql-tools";

const query:IResolvers = {
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

export default query;