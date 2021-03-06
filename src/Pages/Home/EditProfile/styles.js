import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    titleOne: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center'
    },
    buttonBackContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBack: {
        padding: 5
    },
    containerItem: {
        marginBottom: 30
    },
    subTitle: {
        paddingLeft: 20,
        fontSize: 15,
        fontWeight: '600'
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
    buttonSave: {
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