import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.default} onPress={onPress}>
      <Icon name="ios-arrow-back" size={22} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = {
  wrapper: {
    default: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  text: {padding: 5},
};
