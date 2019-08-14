import React, {useState, useEffect} from 'react';
import {StyleSheet, View, CheckBox, TextInput} from 'react-native';
import DateInput from './DateInput';
import {useMutation} from '@apollo/react-hooks';
import {updateTodoQuery} from '../query/todo';
import {
  UpdateTodoData,
  UpdateTodoDataVariables,
} from '../generated/UpdateTodoData';
import {textInputStyleOutline} from './styles/TextInputStyle';
import useDebounce from '../hooks/useDebounce';

type Props = {
  id: string;
  task: string;
  done: boolean;
  dueDate: string;
};
export default function TaskItem({
  id,
  task: taskProp,
  done: doneProp,
  dueDate: dueDateProp,
}: Props) {
  let [updateTodo] = useMutation<UpdateTodoData, UpdateTodoDataVariables>(
    updateTodoQuery,
  );
  let [task, setTask] = useState(taskProp);
  let [done, setDone] = useState(doneProp);
  let [dueDate, setDueDate] = useState(new Date(dueDateProp));
  let debouncedTask = useDebounce(task, 200);
  let debouncedDone = useDebounce(done, 200);
  let debouncedDueDate = useDebounce(dueDate, 200);
  useEffect(() => {
    updateTodo({
      variables: {
        id,
        task: debouncedTask,
        done: debouncedDone,
        dueDate: debouncedDueDate,
      },
    });
  }, [debouncedTask, id, updateTodo, debouncedDone, debouncedDueDate]);
  return (
    <View style={styles.taskContainer}>
      <TextInput
        style={textInputStyleOutline}
        onChangeText={(newTask) => {
          setTask(newTask);
        }}
        value={task}
      />
      <DateInput date={new Date(dueDate)} onChange={setDueDate} />
      <CheckBox value={done} onValueChange={setDone} />
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
