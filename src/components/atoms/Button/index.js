import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../utils';
import ButtonIcon from './ButtonIcon';

const Button = ({onPress, type, name}) => {
  if (type === 'ionicons') {
    return <ButtonIcon name={name} onPress={onPress} />;
  }
  if (type === 'antdesign') {
    return <ButtonIcon name={name} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.wrapper.default} onPress={onPress}>
      <Icon name={ionIcons} size={30} style={styles.wrapper.component} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  wrapper: {
    default: {
      alignSelf: 'center',
      borderWidth: 0,
    },
    component: {
      margin: 5,
      color: colors.mainHeader.text,
    },
  },
};
