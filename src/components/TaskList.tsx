import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import TaskItem from './TaskItem';
import CreateTask from './CreateTask';
import {todoQuery} from '../query/todo';
import {TodoData} from '../generated/TodoData';

export default function TaskList() {
  let {data, loading, refetch} = useQuery<TodoData>(todoQuery);
  console.log('loading >>', loading);
  console.log('data >>', data);
  if (loading || !data) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>To-do List</Text>
        <CreateTask refetch={refetch} />
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{borderBottomWidth: 1}}>
          <Text style={{fontSize: 24, fontWeight: '500'}}>Current Todo</Text>
        </View>
        {data.todoes
          .filter(({done}) => !done)
          .sort(({dueDate: firstDueDate}, {dueDate: secondDueDate}) => {
            let a = new Date(firstDueDate);
            let b = new Date(secondDueDate);
            return a.getTime() - b.getTime();
          })
          .map((todo) => {
            return <TaskItem key={todo.id} {...todo} />;
          })}
        <View style={{borderBottomWidth: 1}}>
          <Text style={{fontSize: 24, fontWeight: '500'}}>Finished Todo</Text>
        </View>
        {data.todoes
          .filter(({done}) => done)
          .sort(({dueDate: firstDueDate}, {dueDate: secondDueDate}) => {
            let a = new Date(firstDueDate);
            let b = new Date(secondDueDate);
            return a.getTime() - b.getTime();
          })
          .map((todo) => {
            return <TaskItem key={todo.id} {...todo} />;
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    width: 500,
    height: 600,
    borderRadius: 5,
  },
  headerContainer: {
    marginHorizontal: 8,
    justifyContent: 'center',
    borderBottomColor: '#a8a8a8',
    borderBottomWidth: 1,
  },
});
