import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {BackButton} from '../../atoms';

const SubHeaderOne = ({onPress, title}) => {
  return (
    <View style={styles.wrapper.header}>
      <BackButton onPress={onPress} />
      <Text style={styles.text.title}>{title}</Text>
      <TouchableOpacity style={styles.search}>
        <Icon name="ios-search" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default SubHeaderOne;

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
