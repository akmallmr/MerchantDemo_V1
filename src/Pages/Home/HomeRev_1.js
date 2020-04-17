import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';

import styles from './styles';
import {colors} from '../../utils';
import {MenuButton, MainHeader} from '../../components';

const Home = ({navigation}) => {
  const handleToGo = screen => {
    navigation.navigate(screen);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.default} barStyle="white" />
        {/* Header */}
        <MainHeader
          title="Merchant"
          onPress={() => handleToGo('EditProfile')}
        />
        {/* Menu */}
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '100%',
              height: '40%',
              backgroundColor: 'lightgrey',
            }}
          />
          <View style={{height: 20}} />

          <View style={{flexDirection: 'row'}}>
            <MenuButton
              fontAwesome="plus-square"
              title="Register Product"
              onPress={() => handleToGo('RegisterProduct')}
            />
            <View style={{width: 15}} />
            <MenuButton
              fontAwesome="receipt"
              title="Create Voucher"
              onPress={() => handleToGo('CreateVoucher')}
            />
          </View>

          <View style={{height: 15}} />

          <View style={{flexDirection: 'row'}}>
            <MenuButton
              fontAwesome="qrcode"
              title="Scan QR"
              onPress={() => handleToGo('Scanqr')}
            />
            <View style={{width: 15}} />
            <MenuButton
              fontAwesome="clipboard"
              title="Report"
              onPress={() => handleToGo('')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
