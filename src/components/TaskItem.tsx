import React from 'react';
import {StyleSheet, View, Text, CheckBox} from 'react-native';
import DateInput from './DateInput';

export default function TaskItem() {
  return (
    <View style={styles.taskContainer}>
      <Text>Beli belanja bulanan</Text>
      <DateInput date={new Date()} onChange={() => {}} />
      <CheckBox />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    borderBottomColor: '#a8a8a8',
    borderBottomWidth: 1,
    height: 64,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
