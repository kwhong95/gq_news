import express from 'express';
import { ApolloServer } from 'apollo-server-express';

// graphql
import { typeDefs } from './graphql/schema';
import query from './graphql/resolver/query';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        query,
    }
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});