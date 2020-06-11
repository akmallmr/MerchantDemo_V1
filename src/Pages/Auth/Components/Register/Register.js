import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Picker,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const Register = ({navigation}) => {
  const handlerGoTo = screen => {
    navigation.navigate(screen);
  };

  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: 'INA',
  });

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  // const _AsyncAccount = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   navigation.navigate(token ? 'Main' : 'Auth');
  // };

  const sendData = async () => {
    console.log('country: ', form.country);
    fetch('https://merchant.mindtrexacademy.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      // .then(response => console.log('require: ', response.confirmPassword))
      .then(async data => {
        console.log(data);
        setErrorMsg(data);
        if (data.status == true) {
          handlerGoTo('Main');
          try {
            await AsyncStorage.setItem('token', data.token);
          } catch (e) {
            console.log('Error here: ', e);
          }
        }
      })
      .catch(error => {
        console.log('Api call error', error);
      });
    console.log('Data yang dikirim: ', form);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require('../../../../assets/Brand/logo.png')}
      />
      <Text style={styles.merchantTitle}> Merchant </Text>
      <View style={{marginTop: 15}}>
        <TextInput
          style={styles.inputID}
          placeholder="Email"
          autoCapitalize="none"
          returnKeyType={'next'}
          value={form.username}
          onChangeText={value => onInputChange(value, 'username')}
        />
        <Text style={styles.errorMsg}>{errorMsg.username}</Text>

        <TextInput
          returnKeyType={'next'}
          style={styles.inputID}
          placeholder="Password"
          secureTextEntry={true}
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
        />
        <Text style={styles.errorMsg}>{errorMsg.password}</Text>

        <TextInput
          returnKeyType={'next'}
          style={styles.inputID}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={form.confirmPassword}
          onChangeText={value => onInputChange(value, 'confirmPassword')}
        />
        <Text style={styles.errorMsg}>{errorMsg.confirmPassword}</Text>

        <Picker
          selectedValue={form.country}
          style={{
            height: 50,
            fontSize: 12,
            width: 300,
            alignSelf: 'center',
          }}
          onValueChange={value => onInputChange(value, 'country')}>
          <Picker.Item label="Indonesia" value="INA" />
          <Picker.Item label="Brunei" value="BRN" />
        </Picker>

        <TextInput
          returnKeyType="done"
          style={styles.inputID}
          placeholder="Phone Number"
          value={form.phone}
          onChangeText={value => onInputChange(value, 'phone')}
        />
        <Text style={styles.errorMsg}>{errorMsg.phone}</Text>

        <TouchableOpacity style={styles.button} onPress={() => sendData()}>
          <Text style={styles.buttonText}>Create your account</Text>
        </TouchableOpacity>

        <View style={{marginTop: 25}}>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              By creating an account, you agree to our
            </Text>
            <TouchableOpacity>
              <Text style={styles.footerClickableText}>Term</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>.</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => handlerGoTo('SignIn')}>
              <Text style={styles.footerClickableText}>Sign in</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}> here.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
