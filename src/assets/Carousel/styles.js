import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create ({
    //cardView
    cardView:{
        flex: 1,
        width: width - 20,
        height: height / 3,
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
        bottom: 10,
        margin: 10,
        left: 5
    },
    image:{
        width: width-20,
        height: height / 3,
        borderRadius: 10,
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5
    },
    itemDescription:{
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    //dotView
    dotView:{ 
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default styles;