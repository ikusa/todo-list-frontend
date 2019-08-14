import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login() {
  return (
    <View style={styles.cardContainer}>
      <Text style={{fontSize: 24, fontWeight: '500'}}>Login</Text>
      <TextInput style={styles.form} placeholder="Email" />
      <TextInput style={styles.form} placeholder="Password" />
      <TouchableOpacity
        style={{
          height: 41,
          width: 290,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3598dc',
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
