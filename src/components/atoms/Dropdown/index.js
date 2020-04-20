import React from 'react';
import {View, Picker} from 'react-native';
import {colors} from '../../../utils';

const Dropdown = () => {
  return (
    <View style={styles.border}>
      <Picker style={styles.picker} itemStyle={styles.layout}>
        <Picker.Item label="Choose Product.." value="0" />
        <Picker.Item label="Footwear" value="1000" />
        <Picker.Item label="Jacket" value="2000" />
        <Picker.Item label="Cloth" value="3000" />
        <Picker.Item label="Sweater" value="4000" />
      </Picker>
    </View>
  );
};

export default Dropdown;

const styles = {
  //Manual Border Color in RN Picker
  border: {
    width: '95%',
    height: 47.5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'black',
    borderColor: colors.default,
    overflow: 'hidden',
  },
  picker: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    color: 'black',
  },
};
