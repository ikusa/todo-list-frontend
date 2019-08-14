import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>To-do List</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <TaskItem />
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
    height: 64,
    marginHorizontal: 8,
    justifyContent: 'center',
    borderBottomColor: '#a8a8a8',
    borderBottomWidth: 1,
  },
});