import React from 'react'
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

class AddRegProd extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.titleOne}>Register Product</Text>
                <TouchableOpacity style={styles.buttonBackContainer} onPress={()=>this.props.navigation.goBack()}>
                    <Icon name='ios-arrow-back' size={22} />
                    <Text style={styles.buttonBack}>Back</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}> Product Name </Text>
                    <TextInput 
                        placeholder={`ex. Chicken Chicken Sambalado`} 
                        style={{marginHorizontal: 23, borderWidth: 1, borderColor: 'grey', height: 35, padding: 5}} />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}> Price </Text>
                    <TextInput 
                        placeholder={`ex. Rp 15.000,00`} 
                        style={{marginHorizontal: 23, borderWidth: 1, borderColor: 'grey', height: 35, padding: 5}}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}> Product Image </Text>
                    <View style={styles.containerUploadButton}>
                        <TouchableOpacity style={styles.buttonUpload}>
                            <Text style={styles.buttonUploadTitle}> Choose Image </Text>
                        </TouchableOpacity>
                        <Text style={styles.limitImageText}>{`*Max. 2 MB`}</Text>
                    </View>
                </View>
                <View style={styles.containerItem}>
                    <Text style={styles.subTitle}>Description</Text>
                    <TextInput 
                        placeholder={`ex. Description..`} 
                        style={styles.boxDescription}
                        />
                    <Text style={styles.limitDescText}>{`*Maximum 200 characters`}</Text>
                </View>
                
                <View style={styles.footerContainer}>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.buttonSave}>
                            <Text style={styles.buttonText}> SAVE </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}

export default AddRegProd;