import  React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

class Signin extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Image style={styles.imgLogo} source={require('../../../../assets/Brand/logo.png')}/>
                    <Text style={styles.merchantTitle}> Merchant </Text>
                <View style={{marginTop:15}}>
                    <TextInput 
                        style={styles.inputID} 
                        placeholder="Username / Email" 
                        autoCapitalize="none" 
                        returnKeyType={"next"} 
                        onSubmitEditing={() => {this.secondTextInput.focus()}}
                        blurOnSubmit={false}
                        />
                    <TextInput 
                        ref={(input) => {this.secondTextInput = input; }}
                        returnKeyType={"go"}
                        style={styles.inputID} 
                        placeholder="Password" 
                        secureTextEntry={true} 
                        />
                    
                    {/* Big Space */}
                    <View style={{width: 275, height:45, margin: 5}} />

                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Sign in</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 50}}>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}> New user? </Text>
                        <TouchableOpacity>
                            <Text style={styles.footerClickableText}>Register</Text>
                        </TouchableOpacity>
                        <Text style={styles.footerText}> here to create your account.</Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}></Text>
                    </View>

                    </View>
                </View>
            </View>
        )
    }
}

export default Signin;