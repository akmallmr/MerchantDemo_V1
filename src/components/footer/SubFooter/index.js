import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const SubFooter = ({onPress, title}) => {
  return (
    <View style={styles.wrapper.default}>
      <View style={styles.wrapper.component}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubFooter;

const styles = {
  wrapper: {
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    component: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#dddddd',
      borderWidth: 0.5,
      borderColor: 'grey',
    },
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '85%',
    height: 45,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#142850',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
};
