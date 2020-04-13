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
    containerUploadButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    buttonUpload: {
        justifyContent: 'center',
        width: 125,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#46525F',
    },
    buttonUploadTitle: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '600'
    },
    limitImageText: {
        alignSelf: 'center',
        fontStyle: 'italic',
        color: 'red',
        right: 120
    },
    boxDescription: {
        marginHorizontal: 23,
        borderWidth: 1,
        borderColor: 'grey',
        height: 225,
        padding: 5,
        textAlignVertical: 'top'
    },
    limitDescText: {
        alignSelf: 'flex-end',
        fontStyle: 'italic',
        color: 'red',
        right: 23
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