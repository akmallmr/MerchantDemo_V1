import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 0
    },
    titleOne: {
        fontSize: 17,
        fontWeight: '700',
        alignSelf: 'center',
        right: 10
    },
    buttonBackContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBack: {
        padding: 5
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        backgroundColor:'white', 
        borderBottomWidth: 1, 
        borderBottomColor:'#dddddd',
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    buttonAdd: {
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        width: 275,
        height: 45, 
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#46525F'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700'
    }
})

export default styles;