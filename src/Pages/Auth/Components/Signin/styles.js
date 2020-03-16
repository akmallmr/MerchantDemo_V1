import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogo: {
        width: '60%',
        height: 60
    },
    merchantTitle:{
        fontWeight:'bold',
        fontStyle:'italic',
        fontSize:15,
        marginLeft: 150,
        color: '#1C81E6'
    },
    inputID:{
        borderWidth: 1,
        borderColor: '#d1d1d1',
        width: 275,
        height: 45,
        margin: 5,
        padding: 10,
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width: 275,
        height: 45, 
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#46525F'
    },
    buttonText:{
        fontSize: 15,
        color: 'white'
    },
    footerContainer:{
        flexDirection:'row',
        alignSelf:'center',
        margin: 5,
    },
    footerText:{
        fontSize: 11,
        color: '#d1d1d1'
    },
    footerClickableText: {
        fontSize: 11,
        color:'darkblue',
        fontWeight:'bold',
        textDecorationLine:'underline'
    }
})

export default styles;