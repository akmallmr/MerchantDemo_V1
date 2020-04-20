import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  Button,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';

import styles from './styles';

import {Input, SubHeaderTwo, Dropdown, SubFooter} from '../../components';

class CreateVoucher extends React.Component {
  constructor() {
    super();
    this.state = {
      checked1: false,
      checked2: false,
      active1: false,
      active2: false,
      isDatePickerVisible: false,
    };
  }

  showDatePicker() {
    this.setState({
      isDatePickerVisible: !this.state.isDatePickerVisible,
    });
  }

  hideDatePicker() {
    this.setState({
      isDatePickerVisible: false,
    });
  }

  handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    this.hideDatePicker();
  };

  onPressedExampleOne() {
    this.setState({
      checked1: !this.state.checked1,
      checked2: false,
    });
  }

  onPressedExampleTwo() {
    this.setState({
      checked2: !this.state.checked2,
      checked1: false,
    });
  }

  onActivePressed() {
    this.setState({
      active1: !this.state.active1,
      active2: false,
    });
  }

  onNonActivePressed() {
    this.setState({
      active2: !this.state.active2,
      active1: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SubHeaderTwo title="Create Voucher" />
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
              checked={this.state.checked1}
              onPress={() => this.onPressedExampleOne()}
              checkedColor="green"
            />
            <View style={{height: 5}} />
            <TextInput
              placeholder={`Rp.`}
              style={{
                // marginHorizontal: 12,
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
              checked={this.state.checked2}
              onPress={() => this.onPressedExampleTwo()}
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
              onPress={() => this.showDatePicker()}>
              <Text style={styles.buttonText}> Date Picker </Text>
              <DateTimePickerModal
                isVisible={this.state.isDatePickerVisible}
                mode="date"
                onConfirm={() => this.handleConfirm()}
                onCancel={() => this.hideDatePicker()}
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
              checked={this.state.active1}
              onPress={() => this.onActivePressed()}
              checkedColor="green"
            />
            <CheckBox
              title="Non-Active"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.active2}
              onPress={() => this.onNonActivePressed()}
              checkedColor="green"
            />
          </View>
        </ScrollView>
        <SubFooter title="Submit" />
      </View>
    );
  }
}

export default CreateVoucher;
