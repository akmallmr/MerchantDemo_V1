import React from 'react';
import {View, SafeAreaView} from 'react-native';

import styles from './styles';
import {SubHeaderOne, SubFooter} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';

const RegisterProduct = ({navigation}) => {
  const backHandle = screen => {
    navigation.navigate(screen);
  };
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <SubHeaderOne
          title="Register Product"
          onPress={() => backHandle('Home')}
        />
        <ScrollView />
        <SubFooter title="Add" onPress={() => handleGoTo('AddRegisterProd')} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterProduct;
