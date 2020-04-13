import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // textAlign:'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    br: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 5 
    },
    title: {
        alignSelf:'center',
        marginBottom: 150
    },
    rowMenuContainer: {
        flexDirection: 'row',
        alignSelf:'center',
        margin: 5,
    },
    button:{
        justifyContent: 'flex-end',
        backgroundColor: 'lightgrey',
        margin: 2,
        width: 150,
        height: 100,
        top: 0,
        bottom: 0
    },
    textButton:{
        alignSelf: 'center',
        margin: 5
    },
    cardView: {
        justifyContent: 'flex-start',
        width: width - 20,
        height: height / 3.5,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        overflow: 'hidden',
        marginTop: 5
    },
    image: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'flex-end',
        width: 200,
        height: 200,
        right: -35,
        bottom: -25,
    },
    textView: {
        justifyContent: 'flex-start',
        padding: 10,
    },
    textItem: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'flex-start'
    },
    mapClickArea: {
        alignSelf:'center', 
        width: 300, 
        height: 110,
        borderWidth: 0
    },
    userTitle: {
        fontWeight: '700',
        fontSize: 12
    },
    welcomeTitle: {
        fontWeight: '700',
        fontSize: 14
    },
    smallButton: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 40, 
        height: 40,
        borderColor: 'lightgrey',
        borderWidth: 0.25,
        borderRadius: 17,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.9,
        elevation: 1,
        margin: 5,
        right: 2,
    }
})

export default styles;