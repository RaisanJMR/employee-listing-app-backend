import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import { connectDB } from './mongoose.js';

await connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async () => ({}),
});

console.log(`🚀 Server ready at ${url}`);
