import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../utils';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'options' && (
        <Icon
          name="md-options"
          size={25}
          style={{color: colors.mainHeader.text}}
        />
      )}
      {rest.name === 'signout' && (
        <AntIcon
          name="logout"
          size={25}
          style={{color: colors.mainHeader.text}}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
