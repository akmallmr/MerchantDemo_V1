import React from 'react';
import {View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {SubeHeaderTwo, Input, SubFooter} from '../../../components';

const EditProfile = ({navigation}) => {
  const backHandle = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper.default}>
      <SubeHeaderTwo title="Settings" onPress={() => backHandle()} />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.space(15)} />
        <Input title="Merchant Name" placeholder="ex. Footware Shop" />

        <View style={styles.space(15)} />
        <Input title="Email" placeholder="ex. customer@xyz.com" />

        <View style={styles.space(15)} />
        <Input title="Phone Number" placeholder="ex. +62 813 9090 9000" />

        <View style={styles.space(15)} />
        <Input
          title="Change Password"
          placeholder="Type your Password here.."
        />

        <View style={styles.space(15)} />
        <Input
          title="Re-type Password"
          placeholder="Re-type your Password here.."
        />
      </ScrollView>
      <SubFooter title="Save" />
    </View>
  );
};

export default EditProfile;

const styles = {
  wrapper: {
    default: {
      flex: 1,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
};
