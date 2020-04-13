import React, { Component } from 'react';
import { View, Text, Image, Platform, Dimensions } from 'react-native';
import MapView, { Marker, Callout, Polygon, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

import Carousel from 'react-native-snap-carousel';


import styles from './styles';
import MyHome from '../../assets/Img/Pendant-White-Kitchen-Wallpaper-Design-Image.jpg'

// const initialState = {
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
// }

// const Maps = () => {
//     const [currentPosition, setCurrentPosition] = useState(initialState);

//     useEffect (() => {
//         Geolocation.getCurrentPosition(position=> {
//             // alert(JSON.stringify(position))
//             const { longitude, latitude } = position.coords;
//             setCurrentPosition({
//                 ...currentPosition,
//                     latitude,
//                     longitude,
//                 })
//         },
//         error => alert(error.massage),
//         { timeout: 20000, maximumAge: 1000}
//         )
//     }, [])

class Maps extends Component {
    _isMounted = false;

    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
            coordinates: [
                 
                { name: 'Richeese Factory Buah Batu', latitude: -6.943967, longitude: 107.630624, image: require('../../assets/Img/richeese.jpg') }, //Baraya Travel Buah Batu 
                { name: 'KFC Buah Batu', latitude: -6.940953, longitude: 107.627085, image: require ('../../assets/Img/kfcdonut.jpg') }, //Bikasoga
                { name: 'Atmosphere Cafe Bandung', latitude: -6.926163, longitude: 107.613443, image: require('../../assets/Img/atmsphre.png') }, //ITC Kebon Kelapa
                { name: 'Parit 9, Bandung', latitude: -6.910243, longitude: 107.630474, image: require('../../assets/Img/parit9.jpg') }, //Taman SuperHero
                { name: 'Griya Arcamanik', latitude: -6.917306, longitude: 107.675926, image: require('../../assets/Img/grya.jpg') }, //Griya Arcamanik
                { name: 'MCD Bandung', latitude: -6.939339, longitude: 107.662631, image: require('../../assets/Img/mcd.jpg') }, //MCD Soetta
            ],
        };
    
    }

    componentDidMount() {
        this._isMounted = true;
        this.requestLocationPermission ();
        // Geolocation.getCurrentPosition(
        //     position=> {
        //         this.setState({
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude,
        //         error: null
        //     });
        //     },
        //     error => this.setState({ error: error.message}),
        //     { enableHighAccuracy: false, timeout: 50000, maximumAge: 2000 }
        // );
    }

    requestLocationPermission = async () => {
        if(Platform.OS === 'android'){
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log('Android: ' + response);

            if(response === 'granted'){
                this.locateCurrentPosition();
            }
        } else { 
           var response = request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
           console.log('Iphone: ' + response);

           if(response === 'granted'){
               this.locateCurrentPosition();
           }
        }
    }

    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position=> {
                console.log(JSON.stringify(position));

                let initialPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035,
                }

                this.setState({ initialPosition });
            },
            error => this.setState(error.message),
            { enableHighAccuracy: false, timeout: 50000, maximumAge: 2000 }
        );
    }

    onCarouselItemChange = (index) => {
        let location = this.state.coordinates[index];

        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
        })
    }

    renderCarouselItem = ({item}) => 
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Image style={styles.cardImage} source={item.image} />
        </View>

    render (){
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    ref ={map => this._map = map}
                    zoomEnabled={true}
                    initialRegion={this.state.initialPosition}
                    showsUserLocation={true}
                >
                {/* <Polygon 
                    coordinates= {this.state.coordinates}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    fillColor={'rgba(241,130,141,0.25)'}
		            strokeWidth={1}
                >
                </Polygon> */}

                <Circle center={this.state} radius={1000} fillColor={'rgba(144,238,144, 0.25)'}/>

                    <Marker
                        coordinate={this.state}>     
                        <Callout>
                            <View style={{justifyContent: 'center', width:150, height: 100}}>
                            <Image source={MyHome} style={{width: '100%', height: '85%'}} />
                            <Text style={{textAlign: 'center', fontWeight:'bold', fontSize:8 }}>Jl. Kliningan No. 5, Buah Batu, Bandung</Text>
                            </View>
                        </Callout>
                    </Marker>
                {
                    this.state.coordinates.map(marker => ( //(marker => (
                        <Marker 
                            key={marker.name}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            title={marker.name}
                        >
                            <Callout>
                                <View style={{justifyContent: 'center'}}>
                                <Text style={{textAlign: 'center', fontWeight:'bold', fontSize:8 }}>Your coupon is here </Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))
                }
                </MapView>
                <Carousel
                    containerCustomStyle={styles.carousel}
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.coordinates}
                    renderItem={this.renderCarouselItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={200}
                    removeClippedSubviews={false}
                    onSnapToItem={(index) => this.onCarouselItemChange(index)}
                />
            </View>
        )
    }
}

export default Maps;