import ApolloClient from 'apollo-boost';
import {AsyncStorage} from 'react-native';

export let client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: async (operation) => {
    const token = await AsyncStorage.getItem('token');
    operation.setContext({
      headers: {
        token,
      },
    });
  },
});
