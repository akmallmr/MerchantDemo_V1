import React from 'react';
import {View, ScrollView} from 'react-native';

// import styles from './styles';
import {
  SubFooter,
  SubeHeaderTwo,
  Input,
  InputImage,
  InputDesc,
} from '../../../components';

const AddRegProd = ({navigation}) => {
  const backHandle = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wrapper.default}>
      <SubeHeaderTwo
        title="Add Register Product"
        onPress={() => backHandle()}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.space(15)} />
        <Input
          title="Product Name"
          placeholder="ex. Winner Winner Chicken Dinner"
        />
        <View style={styles.space(15)} />
        <Input
          title="Price"
          placeholder="ex. Rp 45.000,00"
          keyboardType="numeric"
        />
        <View style={styles.space(15)} />
        <InputImage title="Product Images" />

        <View style={styles.space(15)} />
        <InputDesc title="Description" placeholder="ex. Description.." />
      </ScrollView>

      <SubFooter title="Add" />
    </View>
  );
};

export default AddRegProd;

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
