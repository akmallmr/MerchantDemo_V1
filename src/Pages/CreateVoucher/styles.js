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
    pickerStyle: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignSelf: 'center',
        alignItems:'center',
        padding: 10,
        width: 325,
        height: 45, 
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#46525F',
        color: 'white',
    },
    br: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        width: '95%',
        alignSelf: 'center',
        top: 5,
        marginBottom: 5 
    },
    buttonSubmit: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignSelf: 'center',
        alignItems:'center',
        padding: 10,
        width: 325,
        height: 45, 
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#46525F'
    },
    subTitle: {
        paddingLeft: 8,
        fontSize: 14,
        fontWeight: '600'
    },
    datePicker: {
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf: 'center',
        alignItems:'center',
        padding: 10,
        width: 335,
        height: 45, 
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#46525F'
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
        width: 325,
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