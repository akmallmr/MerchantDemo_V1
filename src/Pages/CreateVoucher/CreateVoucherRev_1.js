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
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.titleOne}>Create Voucher</Text>
            <TouchableOpacity
              style={styles.buttonBackContainer}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" size={22} />
              <Text style={styles.buttonBack}>Back</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Picker style={styles.pickerStyle}>
              <Picker.Item label="Choose Product.." value="0" />
              <Picker.Item label="Footwear" value="1000" />
              <Picker.Item label="Jacket" value="2000" />
              <Picker.Item label="Cloth" value="3000" />
              <Picker.Item label="Sweater" value="4000" />
            </Picker>
            <View
              style={{
                backgroundColor: 'white',
                width: 25,
                height: 25,
                borderRadius: 20,
                justifyContent: 'center',
                position: 'absolute',
                right: 30,
              }}>
              <Icon
                name="ios-arrow-down"
                size={22}
                color="black"
                style={{alignSelf: 'center'}}
              />
            </View>
          </View>

          <View style={styles.br} />

          <CheckBox
            title="Discount nominal"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked1}
            onPress={() => this.onPressedExampleOne()}
            checkedColor="green"
          />
          <View style={styles.containerItem}>
            <TextInput
              placeholder={`Rp.`}
              style={{
                marginHorizontal: 12,
                borderWidth: 0.5,
                borderColor: 'grey',
                height: 35,
                padding: 5,
              }}
            />
          </View>

          <CheckBox
            title="Discount percent"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked2}
            onPress={() => this.onPressedExampleTwo()}
            checkedColor="green"
          />
          <View style={styles.containerItem}>
            <TextInput
              placeholder={`%`}
              style={{
                marginHorizontal: 12,
                borderWidth: 0.5,
                borderColor: 'grey',
                height: 35,
                padding: 5,
                textAlign: 'right',
              }}
            />
          </View>

          <View style={styles.br} />

          <View style={styles.containerItem}>
            <Text style={styles.subTitle}> Quantity </Text>
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

          <View style={styles.footerContainer}>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.buttonSave}>
                <Text style={styles.buttonText}> SUBMIT </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CreateVoucher;
