import  React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

class Register extends Component {
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
                        returnKeyType={"next"}
                        onSubmitEditing={() => {this.thirdTextInput.focus()}}
                        blurOnSubmit={false}
                        style={styles.inputID} 
                        placeholder="Password" 
                        secureTextEntry={true} 
                        
                        />
                    <TextInput 
                        ref={(input) => {this.thirdTextInput = input; }}
                        returnKeyType="done"
                        style={styles.inputID} 
                        placeholder="Phone Number" 
                        
                        />
                    <View>
                        <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>Create your account</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 50}}>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}>By creating an account, you agree to our </Text>
                        <TouchableOpacity>
                            <Text style={styles.footerClickableText}>Term</Text>
                        </TouchableOpacity>
                        <Text style={styles.footerText}>.</Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.footerClickableText}>Sign in</Text>
                        </TouchableOpacity>
                        <Text style={styles.footerText}> here.</Text>
                    </View>

                    </View>
                </View>
            </View>
        )
    }
}

export default Register;