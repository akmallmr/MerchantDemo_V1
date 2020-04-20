import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';

import styles from './styles';

import {Input, SubHeaderTwo, Dropdown, SubFooter} from '../../components';

const CreateVoucher = ({navigation}) => {
  const backHandle = () => {
    navigation.goBack();
  };

  const [nominal, setNominal] = useState(false);
  const [percent, setPercent] = useState(false);

  const onPressExampleOne = () => {
    setNominal(true);
    setPercent(false);
  };

  const onPressExampleTwo = () => {
    setNominal(false);
    setPercent(true);
  };

  const [active, setActive] = useState(false);
  const [nonActive, setNonActive] = useState(false);

  const onActivePressed = () => {
    setActive(true);
    setNonActive(false);
  };

  const onNonActivePressed = () => {
    setActive(false);
    setNonActive(true);
  };

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <SubHeaderTwo title="Create Voucher" onPress={() => backHandle()} />
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: 15}} />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Dropdown />
          <View
            style={{
              alignSelf: 'center',
              position: 'absolute',
            }}>
            <Icon
              name="ios-arrow-down"
              size={22}
              color="black"
              style={{alignSelf: 'center', left: 170}}
            />
          </View>
        </View>

        <View style={{height: 15}} />
        <View style={styles.br} />
        <View style={{height: 15}} />

        <View style={{backgroundColor: 'white'}}>
          <Text style={{paddingLeft: 10}}>Promo Type</Text>
          <CheckBox
            title="Discount nominal"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={nominal}
            onPress={() => onPressExampleOne()}
            checkedColor="green"
          />
          <View style={{height: 5}} />
          <TextInput
            placeholder={`Rp.`}
            style={{
              marginHorizontal: 33,
              left: 23,
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 35,
              padding: 5,
            }}
          />

          <View style={{height: 10}} />
          <CheckBox
            title="Discount percent"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={percent}
            onPress={() => onPressExampleTwo()}
            checkedColor="green"
          />
          <View style={{height: 5}} />
          <TextInput
            placeholder={`%`}
            style={{
              marginHorizontal: 33,
              left: 23,
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 35,
              padding: 5,
              textAlign: 'right',
            }}
          />
        </View>

        <View style={{height: 15}} />
        <View style={styles.br} />
        <View style={{height: 15}} />

        <Input title="Quantity" placeholder="ex. 1 / 3 / ... pcs" />

        <View style={{height: 15}} />

        <View style={styles.containerItem}>
          <Text style={styles.subTitle}> Expiry Date </Text>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => showDatePicker()}>
            <Text style={styles.buttonText}> Date Picker </Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={() => handleConfirm()}
              onCancel={() => hideDatePicker()}
              date={new Date()}
            />
          </TouchableOpacity>

          <TextInput
            placeholder={`ex. 1`}
            style={{
              marginHorizontal: 12,
              borderWidth: 0.5,
              borderColor: 'grey',
              height: 35,
              padding: 5,
            }}
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.subTitle}> Status </Text>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            title="Active"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={active}
            onPress={() => onActivePressed()}
            checkedColor="green"
          />
          <CheckBox
            title="Non-Active"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={nonActive}
            onPress={() => onNonActivePressed()}
            checkedColor="green"
          />
        </View>
      </ScrollView>
      <SubFooter title="Submit" />
    </View>
  );
};

export default CreateVoucher;
