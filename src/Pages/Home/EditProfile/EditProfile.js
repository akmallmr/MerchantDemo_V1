import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

class EditProfile extends React.Component{
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titleOne}>Settings</Text>
                <TouchableOpacity style={styles.buttonBackContainer} onPress={()=>this.props.navigation.goBack()}>
                    <Icon name='ios-arrow-back' size={22} />
                    <Text style={styles.buttonBack}>Back</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}> Merchant Name </Text>
                    <TextInput 
                        placeholder={`ex. Footware Shop`} 
                        style={{marginHorizontal: 23, borderWidth: 1, borderColor: 'grey', height: 35, padding: 5}} />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}> Email </Text>
                    <TextInput 
                        placeholder={`ex. hoshino.tenma@yahoo.com`} 
                        style={{marginHorizontal: 23, borderWidth: 1, borderColor: 'grey', height: 35, padding: 5}}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}> Phone Number </Text>
                    <TextInput 
                        placeholder={`ex. +62 813 9090 9000`} 
                        style={{marginHorizontal: 23, borderWidth: 1, borderColor: 'grey', height: 35, padding: 5}} />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}> Change Password </Text>
                    <TextInput 
                        placeholder={`ex. Fill your password here..`} 
                        style={{marginHorizontal: 23, borderWidth: 1, borderColor: 'grey', height: 35, padding: 5}}
                        secureTextEntry={true} />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}> Re-Type Password </Text>
                    <TextInput 
                        placeholder={`ex. re-fill your password here..`} 
                        style={{marginHorizontal: 23, borderWidth: 1, borderColor: 'grey', height: 35, padding: 5}} 
                        secureTextEntry={true}
                        />
                </View>
                
                <View style={styles.footerContainer}>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.buttonSave}>
                            <Text style={styles.buttonText}> SAVE </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default EditProfile;