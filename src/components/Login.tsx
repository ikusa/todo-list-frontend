import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import {loginQuery} from '../query/auth';
import {LoginData, LoginDataVariables} from '../generated/LoginData';

type Props = {
  setLoginStatus: (status: boolean) => void;
};
export default function Login({setLoginStatus}: Props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [login] = useMutation<LoginData, LoginDataVariables>(loginQuery);
  return (
    <View style={styles.cardContainer}>
      <Text style={{fontSize: 24, fontWeight: '500'}}>Login</Text>
      <TextInput
        style={styles.form}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.form}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        textContentType="password"
      />
      <TouchableOpacity
        style={{
          height: 41,
          width: 290,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3598dc',
        }}
        onPress={async () => {
          let result = await login({variables: {email, password}});
          if (result) {
            let {token} = result.data.login;
            AsyncStorage.setItem('token', token);
            setLoginStatus(true);
          }
        }}
      >
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 350,
    width: 326,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  form: {
    width: 290,
    height: 41,
    backgroundColor: '#f2f2f2',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
});
