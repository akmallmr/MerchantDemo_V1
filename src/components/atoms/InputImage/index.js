import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const InputImage = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.title}>{`Choose Image`}</Text>
        </TouchableOpacity>
        <Text style={styles.limit}>{`*Max. 2 MB`}</Text>
      </View>
    </View>
  );
};

export default InputImage;

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  text: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 5,
  },
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
    paddingRight: 15,
    marginRight: 150,
  },
});
