import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob';

import {
  SubFooter,
  Input,
  InputImage,
  InputDesc,
  SubHeaderTwo,
} from '../../../components';

const AddRegProd = ({navigation}) => {
  const backHandle = () => {
    navigation.goBack();
  };

  const [productImage, setProductImage] = useState({});
  const [dataProduct, setDataProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  const onInputChange = (value, input) => {
    setDataProduct({
      ...dataProduct,
      [input]: value,
    });
  };

  const handleChoosePhoto = () => {
    const option = {};
    ImagePicker.launchImageLibrary(option, response => {
      setProductImage(response);
      console.log('response: ', response);
    });
  };

  // const sendData = async () => {
  //   let myToken = await AsyncStorage.getItem('token');
  //   const data = new FormData();
  //   console.log('img: ', productImage);
  //   data.append('productImage', productImage);
  //   RNFetchBlob.fetch(
  //     'POST',
  //     'https://merchant.mindtrexacademy.com/api/products',
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: 'Bearer ' + myToken,
  //       },
  //     },
  //     [
  //       {
  //         name: 'image',
  //         filename: `${productImage.fileName}`,
  //         type: `${productImage.type}`,
  //         data: `${productImage.data}`,
  //         data: RNFetchBlob.wrap(productImage.data),
  //       },
  //     ],
  //   ).then(res => {
  //     console.log(res);
  //   });
  // }; //via youtube, with rn fetch blob

  // const sendData = async () => {
  //   let myToken = await AsyncStorage.getItem('token');
  //   let blob = new Blob([productImage], {type: 'image/jpeg'});
  //   const data = new FormData();
  //   // data.append('name', 'testName'); // you can append anyone.
  //   data.append('productImage', blob);
  //   fetch('https://merchant.mindtrexacademy.com/api/products', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Authorization: 'Bearer ' + myToken,
  //     },
  //     body: data,
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // }; //with blob

  const sendData = async () => {
    try {
      let myToken = await AsyncStorage.getItem('token');
      const data = new FormData();
      data.append('name', dataProduct.name);
      data.append('price', dataProduct.price);
      data.append('description', dataProduct.description);
      data.append('productImage', {
        name: productImage.fileName,
        type: productImage.type,
        uri: productImage.uri,
      });
      fetch('https://merchant.mindtrexacademy.com/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + myToken,
        },
        body: data,
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          console.log(res, res.status, res.json());
        });
    } catch (err) {
      console.log(err);
    }
  }; //without blob

  return (
    <View style={styles.default}>
      <SubHeaderTwo title="Add Register Product" onPress={() => backHandle()} />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.space(15)} />

        <Text style={styles.text}>Product Name</Text>
        <TextInput
          placeholder="ex. Winner Winner Chicken Dinner"
          style={styles.component}
          value={dataProduct.name}
          onChangeText={value => onInputChange(value, 'name')}
        />

        <View style={styles.space(15)} />

        <Text style={styles.text}>Price</Text>
        <TextInput
          placeholder="ex. Rp 45.000,00"
          style={styles.component}
          keyboardType="numeric"
          value={dataProduct.price}
          onChangeText={value => onInputChange(value, 'price')}
        />

        <View style={styles.space(15)} />

        <Text style={styles.text}>Product Image</Text>
        <View style={styles.subContainer}>
          {!productImage.uri ? (
            <View
              style={{
                backgroundColor: '#ccc',
                width: 100,
                height: 100,
                marginBottom: 10,
                borderRadius: 10,
              }}
            />
          ) : (
            <Image
              source={{uri: productImage.uri}}
              style={{
                width: 100,
                height: 100,
                marginBottom: 10,
                borderRadius: 10,
              }}
            />
          )}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginHorizontal: 20,
            }}>
            <View style={{width: 75}}>
              <Text
                style={[
                  styles.limit,
                  {alignSelf: 'center'},
                ]}>{`*Max. 2 MB`}</Text>
            </View>
            {!productImage.fileName ? (
              <View>
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  No Image.
                </Text>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    marginHorizontal: 5,
                  }}>
                  {productImage.fileName}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.buttonImg}
            onPress={handleChoosePhoto}>
            <Text style={styles.titleButton}>{`Choose Image`}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonImg}>
            <Text style={styles.titleButton}>{`Take a photo`}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.space(15)} />

        <View>
          <Text style={styles.text}>Description</Text>
          <TextInput
            placeholder="Type your description here.."
            style={styles.boxDesc}
            value={dataProduct.description}
            onChangeText={value => onInputChange(value, 'description')}
          />
          <Text style={styles.limit}>{`*Maximum 200 characters`}</Text>
        </View>

        <View style={styles.space(15)} />
      </ScrollView>

      <SubFooter title="Add" onPress={sendData} />
    </View>
  );
};

export default AddRegProd;

const styles = StyleSheet.create({
  default: {
    flex: 1,
  },
  text: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 5,
  },
  component: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 12,
    paddingHorizontal: 18,
    height: 40,
    fontSize: 14,
    borderRadius: 15,
  },
  subContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  buttonImg: {
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#46525F',
    marginRight: 5,
  },
  titleButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  boxDesc: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: 'grey',
    height: 225,
    padding: 5,
    textAlignVertical: 'top',
  },
  limit: {
    textAlign: 'right',
    fontStyle: 'italic',
    color: 'red',
    marginHorizontal: 0,
  },
  space: value => {
    return {
      height: value,
    };
  },
});
