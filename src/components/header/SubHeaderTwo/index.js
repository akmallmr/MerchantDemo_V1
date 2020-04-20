import React from 'react';
import {Text, View} from 'react-native';

import {BackButton} from '../../atoms';

const SubHeaderTwo = ({onPress, title}) => {
  return (
    <View style={styles.wrapper.header}>
      <Text style={styles.text.title}>{title}</Text>
      <BackButton onPress={onPress} />
    </View>
  );
};

export default SubHeaderTwo;

const styles = {
  wrapper: {
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      borderBottomWidth: 1,
      borderColor: '#142850',
    },
  },
  text: {
    title: {
      paddingLeft: 10,
      fontSize: 17,
      fontWeight: '700',
      alignSelf: 'center',
      right: 10,
    },
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
