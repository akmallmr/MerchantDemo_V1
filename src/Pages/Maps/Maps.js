import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles'

const Maps = () => {
    return (
        <View style={styles.container}>
        <MapView 
            // provider={PROVIDER_GOOGLE}
            style={styles.map}
            zoomEnabled={true}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
        </View>
    )
}

export default Maps;