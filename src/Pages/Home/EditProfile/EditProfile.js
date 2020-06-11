import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
  Picker,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';

import {Input, SubFooter, SubHeaderTwo} from '../../../components';

const EditProfile = ({navigation, onPress}) => {
  const backHandle = () => {
    navigation.goBack();
  };

  const successEditProfile = () => {
    Alert.alert(
      'Update user Profile successfull. ',
      ' ',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel Pressed'),
        },
      ],
      {cancelable: false},
    );
  };

  const failedEditProfile = () => {
    Alert.alert(
      'Update user Profile failed / name of product has already been taken. ',
      ' ',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel Pressed'),
        },
      ],
      {cancelable: false},
    );
  };

  const [formEdit, setFormEdit] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: 'IND',
  });

  const onInputChange = (value, input) => {
    setFormEdit({
      ...formEdit,
      [input]: value,
    });
  };

  // const _checkToken = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('token');
  //     if (value !== null) {
  //       console.log('this is token: ', value);
  //       // value previously stored
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const sendData = async () => {
    let myToken = await AsyncStorage.getItem('token');
    fetch('https://merchant.mindtrexacademy.com/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + myToken,
      },
      body: JSON.stringify(formEdit),
    })
      .then(response => response.json())
      // .then(response => console.log('require: ', response.confirmPassword))
      .then(data => {
        console.log(data);
        data.status == true ? successEditProfile() : failedEditProfile();
        setErrorMsg(data);
      })
      .catch(error => {
        console.log('Api call error');
      });
    console.log('Data yang dikirim: ', formEdit);
  };

  return (
    <View style={styles.wrapper.default}>
      <SubHeaderTwo title="Settings" onPress={() => backHandle()} />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.space(15)} />
        <Input
          title="Merchant Name"
          placeholder="ex. Footware Shop"
          value={formEdit.name}
          onChangeText={value => {
            onInputChange(value, 'name');
          }}
        />

        <View style={styles.space(15)} />
        <Input
          title="Email"
          placeholder="ex. customer@xyz.com"
          value={formEdit.emailnga}
          onChangeText={value => {
            onInputChange(value, 'email');
          }}
        />

        <View style={styles.space(15)} />
        <Input
          title="Phone Number"
          placeholder="ex. +62 813 9090 9000"
          value={formEdit.phone}
          onChangeText={value => {
            onInputChange(value, 'phone');
          }}
        />

        <View style={styles.space(15)} />
        <Input
          title="Change Password"
          placeholder="Type your Password here.."
          value={formEdit.password}
          onChangeText={value => {
            onInputChange(value, 'password');
          }}
        />

        <View style={styles.space(15)} />
        <Input
          title="Re-type Password"
          placeholder="Re-type your Password here.."
          value={formEdit.confirmPassword}
          onChangeText={value => {
            onInputChange(value, 'confirmPassword');
          }}
        />

        <View style={styles.space(15)} />
        <Picker
          selectedValue={formEdit.country}
          style={{
            height: 50,
            fontSize: 12,
            width: 300,
            alignSelf: 'center',
          }}
          onValueChange={value => onInputChange(value, 'country')}>
          <Picker.Item label="Indonesia" value="IND" />
          <Picker.Item label="Brunei" value="BRN" />
        </Picker>

        <View style={styles.space(15)} />
      </ScrollView>
      <SubFooter title="Save" onPress={() => sendData()} />
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
  button: {
    height: 45,
    width: '85%',
    padding: 10,
    alignSelf: 'center',
  },
};
