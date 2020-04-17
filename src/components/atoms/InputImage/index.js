import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const InputImage = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.wrapper.subcontainer}>
        <TouchableOpacity style={styles.component.item}>
          <Text style={styles.component.title}>{`Choose Image`}</Text>
        </TouchableOpacity>
        <Text style={styles.component.limit}>{`*Max. 2 MB`}</Text>
      </View>
    </View>
  );
};

export default InputImage;

const styles = {
  wrapper: {
    subcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
    },
  },
  text: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 5,
  },
  component: {
    item: {
      justifyContent: 'center',
      width: 125,
      height: 40,
      borderRadius: 10,
      backgroundColor: '#46525F',
    },
    title: {
      alignSelf: 'center',
      color: 'white',
      fontWeight: '600',
    },
    limit: {
      alignSelf: 'center',
      fontStyle: 'italic',
      color: 'red',
      right: 195,
    },
  },
};
