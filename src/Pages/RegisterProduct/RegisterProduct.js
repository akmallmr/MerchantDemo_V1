import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  Button,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import {SubHeaderOne, SubFooter} from '../../components';
import {colors} from '../../utils';

const RegisterProduct = ({navigation, itemData}) => {
  const backHandle = screen => {
    navigation.navigate(screen);
  };
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const [total, setTotal] = useState();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    getProduct();
    console.log('page useEffect: ', page);
  }, [page, isLoading]);

  const getProduct = async () => {
    let myToken = await AsyncStorage.getItem('token');
    let url = new URL('https://merchant.mindtrexacademy.com/api/products');
    url.searchParams.append('page', page);
    // if (search !== "") {
    //   url.searchParams.append("search", search)
    // }
    fetch(url.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + myToken,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (page !== 1) {
          setCurrentItem(currentItem + res.data.currentPageTotal);
        } else {
          setCurrentItem(0 + res.data.currentPageTotal);
        }
        setTotal(res.data.total);
        setProduct(
          page === 1 ? res.data.items : [...product, ...res.data.items],
        );
        setIsLoading(false);
      });
  };

  const renderFooter = () => {
    if (currentItem == total) return null;
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const handleRefresh = () => {
    if (isLoading) return;
    setPage(1);
    setIsLoading(true);
    console.log('refresh:', isLoading);
    console.log('page:', page);
  };

  const handleLoadMore = () => {
    if (isLoading) return;
    setIsLoading(true);
    setPage(page + 1);
    console.log('page load: ', page);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <SubHeaderOne
        title="Register Product"
        onPress={() => backHandle('Home')}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          style={{
            width: '95%',
            margin: 5,
          }}
          showsVerticalScrollIndicator={false}
          data={product}
          onEndReachedThreshold={0}
          onEndReached={handleLoadMore}
          ListFooterComponent={renderFooter}
          refreshing={isLoading}
          onRefresh={handleRefresh}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                height: 150,
                padding: 10,
                margin: 5,
                alignSelf: 'center',
                width: '100%',
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 15,
                borderColor: colors.default,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri: item.image}}
                  style={{borderRadius: 15, width: 125, height: 125}}
                />
                <View style={{padding: 5, width: '64%'}}>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-ExtraBold',
                      fontSize: 20,
                    }}>{`${item.name.toUpperCase()}`}</Text>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-SemiBold',
                      fontSize: 25,
                    }}>{`Rp ${item.price},00`}</Text>
                  <View style={{height: 10}} />
                  <Text
                    numberOfLines={2}
                    style={{fontFamily: 'OpenSans-Reguler', fontSize: 12}}>{`${
                    item.description
                  }`}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <SubFooter title="Add" onPress={() => handleGoTo('AddRegisterProd')} />
    </SafeAreaView>
  );
};

export default RegisterProduct;
