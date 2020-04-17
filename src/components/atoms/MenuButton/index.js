import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MenuIcon from 'react-native-vector-icons/FontAwesome5';

import {colors} from '../../../utils';

const MainButton = ({title, onPress, fontAwesome}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <MenuIcon name={fontAwesome} size={70} style={styles.icon} />
      <View style={{height: 15}} />
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = {
  wrapper: {
    component: {
      width: '40%',
      height: 140,
      backgroundColor: 'white',
      justifyContent: 'flex-end',
      margin: 5,
      borderWidth: 1.5,
      borderColor: colors.default,
      borderRadius: 15,
      shadowOffset: {width: 0, height: 1},
      shadowColor: 'black',
      shadowOpacity: 0.8,
      elevation: 5,
      shadowRadius: 2,
    },
  },
  icon: {
    alignSelf: 'center',
    color: colors.default,
  },
  text: {
    title: {
      alignSelf: 'center',
      margin: 5,
      color: colors.text.buttonTitle,
    },
  },
};
