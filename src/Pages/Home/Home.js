import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Carousel from '../../assets/Carousel/Carousel';
import { dummyData } from '../../assets/Data/data';

import styles from './styles'

class Home extends React.Component {
    // static navigationOptions = {
    //     title: 'Merchant',
    // };

    render(){
        return (
            <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <StatusBar backgroundColor="white" />
                {/* Header */}
                <View style={{height: 60, backgroundColor:'white', borderBottomWidth: 1, borderBottomColor:'#dddddd'}}>
                {/* SearchBar */}
                        <View style={{flexDirection: 'row', padding: 10, bottom: 13, shadowOffset: {width: 0, height: 0}, marginHorizontal: 20,
                              shadowColor: 'black', shadowOpacity: 0.9, elevation: 1, alignItems: 'center', backgroundColor: 'white', height: 35,
                              borderRadius: 25, bottom: 0, top: 10}}>
                            <Icon name='ios-search' size={20} style={{marginRight: 5}}/>
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder={`Try "KFC Bandung Voucher" `}
                                placeholderTextColor="grey"
                                style={{fontWeight: '500', fontSize:13, position: 'absolute', left: 30}}
                            />
                        </View>
                </View>

                {/* Profile Tag */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  borderWidth: 0}}>
                    <View style={{padding: 10}}>
                        <Text style={styles.welcomeTitle}> {`Welcome to the Merchant Mindtrex,`} </Text>
                        <Text style={styles.userTitle}> {`AKMAL MAULA RASYID`} </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5, borderWidth: 0}}>
                        <TouchableOpacity style={styles.smallButton}>
                            <Icon name='md-notifications-outline' size={30} style={{margin: 5, alignSelf: 'center'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.smallButton} onPress={()=> this.props.navigation.navigate('EditProfile')}>
                            <Icon name='md-person' size={30} style={{margin: 5}}/>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Carousel */}
                <Carousel data = {dummyData}/>
                <View style={styles.br} />
            
                {/* Maps */}
                <View style={styles.cardView}>
                    <Image 
                        style={styles.image}
                        source={require('../../assets/Img/map.png')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.textItem}> 
                            {`Do you want to see your availability coupon near your area ?`}
                        </Text>
                    </View>
                    <TouchableOpacity 
                        title="Maps"
                        style={styles.mapClickArea}
                        onPress={() => this.props.navigation.navigate('Maps')} />
                </View>

                <View style={styles.br} />

                {/* Menu */}
                <View>
                    <Text style={{padding: 5, fontSize: 15, fontWeight: '700', borderWidth: 0, height: 27}}> MENU </Text>
                    <ScrollView 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        style={{padding: 0}}>

                        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('RegisterProduct')}>
                            <Text style={styles.textButton}> Register Product </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('CreateVoucher')}>
                            <Text style={styles.textButton}> Create Voucher </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Scanqr')}>
                            <Text style={styles.textButton}> ScanQR </Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}> Report </Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
                </View>
            </View>
            </SafeAreaView>
        )
    }
}

export default Home;