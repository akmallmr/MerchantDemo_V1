import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../../Button/Menu/styles'

const btnMenu = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('ScanQR')}>
            <Text style={styles.textButton}> {props.title} </Text>
        </TouchableOpacity>
    )
}

export default btnMenu;