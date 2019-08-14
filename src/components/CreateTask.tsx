import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {useMutation} from '@apollo/react-hooks';

import {textInputStyleOutline} from './styles/TextInputStyle';
import DateInput from './DateInput';
import {createTodoQuery} from '../query/todo';
import {
  CreateTodoData,
  CreateTodoDataVariables,
} from '../generated/CreateTodoData';

export default function CreateTask() {
  let [task, setTask] = useState('');
  let [dueDate, setDate] = useState(new Date());
  let [createTodo] = useMutation<CreateTodoData, CreateTodoDataVariables>(
    createTodoQuery,
  );
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="insert new task"
        value={task}
        onChangeText={setTask}
        style={textInputStyleOutline}
      />
      <DateInput date={dueDate} onChange={setDate} />
      <Button
        title="Add"
        onPress={() => {
          createTodo({variables: {task, dueDate: dueDate.toISOString()}});
          setTask('');
          setDate(new Date());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
