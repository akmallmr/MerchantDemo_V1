import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import {RNCamera} from 'react-native-camera';
import {RNFetchBlob} from 'rn-fetch-blob'

import styles from './styles';

class Scanqr extends Component {
    state= {
        barcode:'Scan QR Code Here'
    }
    render () {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor= 'black' barStyle='white' />
            <Text> Scan QR </Text>
            <RNCamera
                ref={ref => {
                    this.camera=ref;
                }}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                style={{
                    width:'100%',
                    height:'100%'
                }}
                onBarCodeRead={(barcode) => {
                    console.log(barcode);
                    this.setState({
                        barcode: barcode.data
                    })
                }}
            >
            </RNCamera>
            <View style={{flex: 0, flexDirection:'row', justifyContent:'center'}}>
                <View style={styles.tagQR}>
                        <Text style={styles.titleTag}> {`${this.state.barcode}`}</Text>
                </View>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                    <Text style={{fontSize: 10}}>SNAP</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
    takePicture= async ()=>{
        if(this.camera){
            const options={quality: 0.5, base:true};
            const data=await this.camera.takePictureAsync(options);
            console.log(data.base64)
            const path=`${RNFetchBlob.fs.dirs.CacheDir}/test.png`;
            console.log('path', path)
            try{
                RNFetchBlob.fs.writeFile(path,data.base64,'base64')
            }
            catch(error){
                console.log(error.message);
            }
        }
    };
}

export default Scanqr;