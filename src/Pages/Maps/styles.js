import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        // ...StyleSheet.absoluteFillObject,
        // height: 400,
        // width: 400,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        ...StyleSheet.absoluteFillObject
      },
    map: {
      ...StyleSheet.absoluteFillObject
    },
    carousel: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 48
    },
    cardContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      height: 150,
      width: 200,
      padding: 24,
      borderRadius: 14,
    },
    cardImage: {
      height: 125,
      width: 200,
      position: 'absolute',
      bottom: 0,
      borderBottomLeftRadius: 14,
      borderBottomRightRadius: 14
    },
    cardTitle: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 12,
      fontWeight: 'bold',
      bottom: 18
    }
})

export default styles;