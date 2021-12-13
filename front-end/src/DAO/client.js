import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

// Definition Apollo Client to connect to dataBase
const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:4000/researchProject'
    }),
    cache: new InMemoryCache()
});

export default client;