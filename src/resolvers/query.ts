import { IResolvers } from "graphql-tools";

const query:IResolvers = {
    Query: {
        hola(): string{
            return 'hola estrellitas la tierra les dice hola';
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