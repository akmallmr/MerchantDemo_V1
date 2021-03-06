import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Animated, Dimensions } from 'react-native';
import CarItem from './CarItem';

import styles from './styles';

const {width, height } = Dimensions.get('window')
let flatList 

function infiniteScroll(dataList) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width

        else {
            scrollValue = 0
            scrolled = 0
        }

        this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
    }, 3000)
}

const Carousel = ({data}) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList)
    })

    if (data && data.length) {
        return (
            <View>
                <FlatList
                    data={data}
                    ref = {(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment = 'center'
                    scrollEventThrottle = {16}
                    decelerationRate = {"fast"}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item}) => {
                        return <CarItem item= {item} />
                    }}
                    onScroll = {Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX }}}]
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 0.5, i, i + 0.5],
                            outputRange: [0.3,1,0.3],
                            extrapolate: 'clamp'
                        })
                    return(
                        <Animated.View
                            key = {i}
                            style={{opacity, height: 5, width: 5, backgroundColor: '#595959', margin: 3, borderRadius: 5}}                                 
                        />
                    )
                    })}
                </View>
            </View>
        )
    }
    console.log('Please provide Images')
    return null
}

export default Carousel;