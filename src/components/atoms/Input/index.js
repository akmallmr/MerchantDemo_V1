import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({title, placeholder, keyboardType, autoCorrect}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.component}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
      />
    </View>
  );
};

export default Input;

const styles = {
  component: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 12,
    paddingHorizontal: 18,
    height: 40,
    fontSize: 14,
    borderRadius: 15,
  },
  text: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 5,
  },
};
