import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';

import {client} from './lib/client';

import Login from './components/Login';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Login />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe1c7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
