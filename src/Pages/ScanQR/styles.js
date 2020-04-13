import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        // justifyContent:'center',
        // alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:5,
        bottom: 50,
        padding: 15,
        paddingHorizontal:20,
        alignSelf:'center',
        margin: 20
    },
    tagQR: {
        flex: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        borderRadius:5,
        bottom: 100,
        padding: 15,
        width: 250,
        paddingHorizontal:20,
        alignSelf:'center',
        margin: 20,
    },
    titleTag: {
        color: 'white',
        alignSelf: 'center'
    }
})

export default styles;