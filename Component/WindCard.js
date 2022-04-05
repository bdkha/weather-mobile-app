import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageOverlay from 'react-native-image-overlay';

const WindCard = props => {
  const color = props.color;
  const deg = props.deg;
  return (
    <View style={styles.container}>
      <View style={[styles.card, {backgroundColor: {color}}]}>
        <View style={styles.head}>
          <Icon style={styles.icon} name="wind" color="#ddd" size={25} />
          <Text style={styles.title}>WIND</Text>
        </View>
        <View style={styles.body}>
          <ImageBackground
            style={styles.compass}
            source={require('../assets/compass.png')}>
            <ImageBackground
              style={[styles.arrow, {transform: [{rotate: deg + 'deg'}]}]}
              source={require('../assets/arrow.png')}>
              <Text style={styles.text}>{props.speed}</Text>
              <Text style={styles.text}>m/s</Text>
            </ImageBackground>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default WindCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2,
    height: 300,
    marginTop: 30,
    paddingLeft: 35,
    paddingRight: 15,
  },
  card: {
    borderRadius: 15,
  },
  head: {
    flexDirection: 'row',
    height: 40,
  },
  icon: {
    maxHeight: 40,
    marginLeft: 20,
  },
  title: {
    fontFamily: 'OpenSansLight',
    color: 'rgba(124,128,131,255)',
    fontSize: 15,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  compass: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
  },
  arrow: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'OpenSansLight',
    fontSize: 15,
  },
});
