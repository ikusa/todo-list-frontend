import ApolloClient from 'apollo-boost';

export let client = new ApolloClient({
  uri: 'http://localhost:4000',
});
