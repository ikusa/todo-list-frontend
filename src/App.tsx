import React, {useState, useEffect} from 'react';
import {StyleSheet, View, AsyncStorage, Button} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';

import {client} from './lib/client';

import Login from './components/Login';
import TaskList from './components/TaskList';

export default function App() {
  let [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    let setToken = async () => {
      let token = await AsyncStorage.getItem('token');
      if (token) {
        setLoginStatus(true);
      }
    };
    setToken();
  }, []);
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {loginStatus ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              backgroundColor: '#fff',
              alignItems: 'flex-end',
              justifyContent: 'center',
              height: 64,
              padding: 16,
            }}
          >
            <View>
              <Button
                title="Logout"
                onPress={() => {
                  AsyncStorage.removeItem('token');
                  setLoginStatus(false);
                }}
              />
            </View>
          </View>
        ) : null}

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
