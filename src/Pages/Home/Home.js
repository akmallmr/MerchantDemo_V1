import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native';

import Carousel from '../../assets/Carousel/Carousel';
import MyButton from '../../assets/Button/Menu/MyButton';
import { dummyData } from '../../assets/Data/data';

import styles from './styles'

class Home extends React.Component {
    // static navigationOptions = {
    //     title: 'Merchant',
    // };

    render(){
        return (
            //Carrousel
            <View style={styles.container}>
                <StatusBar backgroundColor="white" />
                <Carousel data = {dummyData}/>
                <View style={{
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 1,
                        width: '95%',
                        alignSelf: 'center'
                        
                    }}/>
            
            {/* Menu */}    
            <View style={styles.rowMenuContainer}>
                <MyButton title="Register Product"/>
                <MyButton title="Create Voucher"/>
            </View>

            <View style={styles.rowMenuContainer}>
                <MyButton title="Scan QR" />
                <MyButton title="Report"/>
            </View>

                <View>
                <Text style={styles.title}>Home Screen</Text>
                {/* <Button 
                    title="Edit Profile"
                    style={{ margin: 5}}
                    onPress={() => this.props.navigation.navigate('EditProfile')}
                /> */}

                <Button 
                    title="Maps"
                    style={{width:20, height: 10, marginTop: 10 }}
                    onPress={() => this.props.navigation.navigate('Maps')}
                />
                </View>
            </View>
        )
    }
}

export default Home;