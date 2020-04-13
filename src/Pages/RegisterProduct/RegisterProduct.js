import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

class RegisterProduct extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.buttonBackContainer} onPress={()=>this.props.navigation.navigate('Home')}>
                            <Icon name='ios-arrow-back' size={22} />
                            <Text style={styles.buttonBack}>Back</Text>
                        </TouchableOpacity>
                        <Text style={styles.titleOne}>Register Product</Text>
                        <TouchableOpacity style={styles.buttonBackContainer} onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='ios-search' size={22} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerContainer}>
                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.buttonAdd} onPress={()=> this.props.navigation.navigate('AddRegisterProd')}>
                                <Text style={styles.buttonText}> ADD </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default RegisterProduct;
