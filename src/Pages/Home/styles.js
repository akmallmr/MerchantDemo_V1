import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        textAlign:'center',
        backgroundColor: 'white'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    title: {
        alignSelf:'center'
    },
    rowMenuContainer: {
        flexDirection: 'row',
        alignSelf:'center',
        margin: 5
    },
    button1:{
        backgroundColor: 'lightgrey',
        width:150,
        height:100
    },
    button2:{
        backgroundColor: 'grey',
        width:'75%',
        height: '45%'
    },
})

export default styles;