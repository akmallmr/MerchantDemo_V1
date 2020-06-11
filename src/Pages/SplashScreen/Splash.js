import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Splash = ({navigation}) => {
  const _AsyncAccount = async () => {
    const token = await AsyncStorage.getItem('token');
    navigation.navigate(token ? 'Main' : 'Auth');
  };

  useEffect(() => {
    _AsyncAccount();
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require('../../assets/Brand/logo.png')}
      />
      <Text style={styles.merchantTitle}>Merchant</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgLogo: {
    width: '60%',
    height: 60,
  },
  merchantTitle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    marginLeft: 150,
    color: '#1C81E6',
  },
});
