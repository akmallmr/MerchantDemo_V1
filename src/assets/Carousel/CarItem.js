import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

const CarItem = ({item}) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{uri: item.url}} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
                <Text style={styles.itemDescription}> {item.description} </Text>
            </View>
        </View>
    )
}

export default CarItem;