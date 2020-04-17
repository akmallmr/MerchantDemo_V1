import React from 'react';
import {TextInput, Text, View} from 'react-native';

const InputDesc = ({title, placeholder}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.component.boxDesc} />
      <Text style={styles.component.limit}>{`*Maximum 200 characters`}</Text>
    </View>
  );
};

export default InputDesc;

const styles = {
  text: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 5,
  },
  component: {
    boxDesc: {
      marginHorizontal: 15,
      borderWidth: 1,
      borderColor: 'grey',
      height: 225,
      padding: 5,
      textAlignVertical: 'top',
    },
    title: {
      alignSelf: 'center',
      color: 'white',
      fontWeight: '600',
    },
    limit: {
      alignSelf: 'center',
      fontStyle: 'italic',
      color: 'red',
      left: 105,
    },
  },
};
