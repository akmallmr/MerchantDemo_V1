import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

class EditProfile extends React.Component{
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Edit Profile</Text>
            </View>
        )
    }
}

export default EditProfile;