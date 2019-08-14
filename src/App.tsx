import React, {useState, useEffect} from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';

import {client} from './lib/client';

import Login from './components/Login';
import TaskList from './components/TaskList';

export default function App() {
  let [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    let setToken = async () => {
      let token = await AsyncStorage.getItem('token');
      console.log('token >>', token);
      if (token) {
        setLoginStatus(true);
      }
    };
    setToken();
  }, []);
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {loginStatus ? <TaskList /> : <Login setLoginStatus={setLoginStatus} />}
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
