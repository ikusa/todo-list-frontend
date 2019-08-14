import React from 'react';
import {StyleSheet, View, Text, CheckBox, TextInput} from 'react-native';

export default function TaskItem() {
  return (
    <View style={styles.taskContainer}>
      <Text>Beli belanja bulanan</Text>
      <View>
        <View style={{flexDirection: 'row', width: 50}}>
          <TextInput style={styles.dateInput} value={'31'} />
          <Text style={styles.separator}>/</Text>
          <TextInput style={styles.dateInput} value={'06'} />
          <Text style={styles.separator}>/</Text>
          <TextInput style={{width: 35}} value={'2018'} />
        </View>
        <View style={{flexDirection: 'row', width: 50}}>
          <TextInput style={styles.dateInput} value={'12'} />
          <Text style={styles.separator}>:</Text>
          <TextInput style={styles.dateInput} value={'06'} />
        </View>
      </View>
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
  dateInput: {
    width: 20,
  },
  separator: {
    marginRight: 5,
  },
});
