import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create ({
    //cardView
    cardView:{
        flex: 1,
        width: width - 20,
        height: height / 6,
        backgroundColor: 'white',
        // marginTop: 40,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    textView:{
        position: 'absolute',
        bottom: 5,
        margin: 5,
        left: 5
    },
    image:{
        width: width-20,
        height: height / 6,
        borderRadius: 10,
    },
    itemTitle: {
        color: 'white',
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        fontWeight: 'bold',
        elevation: 5
    },
    itemDescription:{
        color: 'white',
        fontSize: 9,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        padding: 2.5,
        elevation: 5
    },
    //dotView
    dotView:{ 
        flexDirection: 'row',
        bottom: 5,
        paddingLeft: 10
    }
})

export default styles;