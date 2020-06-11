import React from 'react';
import {Text, View} from 'react-native';

import {TouchIcon, Button} from '../../atoms';
import {colors} from '../../../utils';

const MainHeader = ({title, onPressEditProf, onPressSignOut}) => {
  return (
    <View style={styles.wrapper.default}>
      <View style={styles.wrapper.header}>
        <Text style={styles.text.title}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Button type="ionicons" name="options" onPress={onPressEditProf} />
          <View style={{width: 20}} />
          <Button type="antdesign" name="signout" onPress={onPressSignOut} />
          {/* <TouchIcon ionIcons="md-options" onPress={onPress} /> */}
        </View>
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
      marginHorizontal: 5,
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
