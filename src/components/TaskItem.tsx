import React from 'react';
import {StyleSheet, View, Text, CheckBox} from 'react-native';
import DateInput from './DateInput';

type Props = {
  id: string;
  task: string;
  done: boolean;
  dueDate: string;
};
export default function TaskItem({task, done, dueDate}: Props) {
  return (
    <View style={styles.taskContainer}>
      <Text>{task}</Text>
      <DateInput date={new Date(dueDate)} onChange={() => {}} />
      <CheckBox value={done} />
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
