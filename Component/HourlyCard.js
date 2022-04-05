import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

function HourlyCard({item}) {
  const dt = new Date(item.dt * 1000).getHours();
  let hour;
  if (dt == 0) hour = '12 PM';
  else if (dt > 12) hour = `${dt - 12} PM`;
  else hour = `${dt} AM`;
  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{hour}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
        }}></Image>
      <Text style={styles.temp}>{Math.round(item.temp)}°</Text>
    </View>
  );
}

export default HourlyCard;

const styles = StyleSheet.create({
  container: {
    width: 78,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hour: {
    fontFamily: 'OpenSansLight',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
    marginTop: 5,
  },
  icon: {
    width: 50,
    height: 25,
  },
  temp: {
    fontFamily: 'OpenSansLight',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
});
