import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const SignIn = ({navigation}) => {
  const handlerGoTo = screen => {
    navigation.navigate(screen);
  };

  const [errorMsg, setErrorMsg] = useState('');
  const [formLogin, setFormLogin] = useState({
    username: '',
    password: '',
  });

  const onInputChange = (value, input) => {
    setFormLogin({
      ...formLogin,
      [input]: value,
    });
  };

  const sendData = async () => {
    fetch('https://merchant.mindtrexacademy.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formLogin),
    })
      // .then(response => {
      //   if (response.status == 200) {
      //     handlerGoTo('Main');
      //   }
      // })
      .then(response => response.json())
      .then(async data => {
        console.log('Data status: ', data.status);
        setErrorMsg(data);
        if (data.status == true) {
          handlerGoTo('Main');
          console.log(data);
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
    console.log('Data yang dikirim: ', formLogin);
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
          placeholder="Username / Email"
          autoCapitalize="none"
          returnKeyType={'next'}
          value={formLogin.username}
          onChangeText={value => onInputChange(value, 'username')}
        />
        <Text style={styles.errorMsg}>
          {errorMsg.username} {errorMsg.message}
        </Text>

        <TextInput
          returnKeyType={'go'}
          style={styles.inputID}
          placeholder="Password"
          secureTextEntry={true}
          value={formLogin.password}
          onChangeText={value => onInputChange(value, 'password')}
        />
        <Text style={styles.errorMsg}>{errorMsg.password}</Text>

        {/* Big Space */}

        <TouchableOpacity style={styles.button} onPress={() => sendData()}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={{marginTop: 5}}>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}> New user? </Text>
            <TouchableOpacity onPress={() => handlerGoTo('Register')}>
              <Text style={styles.footerClickableText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>here to create your account.</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
