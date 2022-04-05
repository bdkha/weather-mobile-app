import React from 'react';
import {Image, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const GooglePlacesInput = () => {
  return (
    <View style={{}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyCseTf3eelxKojP6pP1px8-bZA5XFvnmPw',
          language: 'en',
        }}
        predefinedPlaces={[homePlace, workPlace]}
      />
    </View>
  );
};

export default GooglePlacesInput;
