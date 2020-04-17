import React from 'react';
import {Text, View} from 'react-native';

import {TouchIcon} from '../../atoms';
import {colors} from '../../../utils';

const MainHeader = ({title, onPress}) => {
  return (
    <View style={styles.wrapper.default}>
      <View style={styles.wrapper.header}>
        <Text style={styles.text.title}>{title}</Text>
        <TouchIcon ionIcons="md-options" onPress={onPress} />
      </View>
    </View>
  );
};

export default MainHeader;

const styles = {
  wrapper: {
    default: {
      flex: 1,
      height: 60,
      backgroundColor: colors.default,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: 10,
      borderWidth: 0,
    },
  },
  text: {
    title: {
      fontSize: 25,
      alignSelf: 'center',
      borderWidth: 0,
      color: colors.mainHeader.text,
      fontWeight: 'bold',
    },
  },
};
