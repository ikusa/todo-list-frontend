import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-picker/assets/popup.css';
import PopPicker from 'rmc-date-picker/es/Popup';
import DatePicker from 'rmc-date-picker/es/DatePicker';

type Props = {
  date: Date;
  onChange: (newDate: Date) => void;
};
export default function DateInput({date, onChange}: Props) {
  const datePicker = (
    <DatePicker
      rootNativeProps={{'data-xx': 'yy'}}
      defaultDate={new Date()}
      mode={'datetime'}
    />
  );
  return (
    <PopPicker
      datePicker={datePicker}
      transitionName="rmc-picker-popup-slide-fade"
      maskTransitionName="rmc-picker-popup-fade"
      title="Date picker"
      date={date}
      onChange={onChange}
    >
      <View>
        <View style={{flexDirection: 'row', width: 50}}>
          <Text style={[styles.dateInput]}>
            {String(date.getDate()).padStart(2, '0')}
          </Text>
          <Text style={styles.separator}>/</Text>
          <Text style={[styles.dateInput]}>
            {String(date.getMonth() + 1).padStart(2, '0')}
          </Text>
          <Text style={styles.separator}>/</Text>
          <Text style={[{width: 35}]}>{String(date.getFullYear())}</Text>
        </View>
        <View style={{flexDirection: 'row', width: 50}}>
          <Text style={[styles.dateInput]}>
            {String(date.getHours()).padStart(2, '0')}
          </Text>
          <Text style={styles.separator}>:</Text>
          <Text style={[styles.dateInput]}>
            {String(date.getMinutes()).padStart(2, '0')}
          </Text>
        </View>
      </View>
    </PopPicker>
  );
}

const styles = StyleSheet.create({
  dateInput: {
    width: 20,
  },
  separator: {
    marginRight: 5,
  },
});
