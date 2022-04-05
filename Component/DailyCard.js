import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

function DailyCard({item}) {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <View style={styles.container}>
      <Text style={styles.day}>
        {weekday[new Date(item.dt * 1000).getDay()]}
      </Text>
      <Image
        style={styles.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
        }}></Image>
      <Text style={styles.temp}>{Math.round(item.temp.day)}°</Text>
      <Text style={styles.temp}>{Math.round(item.temp.night)}°</Text>
    </View>
  );
}

export default DailyCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  day: {
    fontFamily: 'OpenSansLight',
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    marginTop: 5,
  },
  icon: {
    maxHeight: 50,
    maxWidth: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontFamily: 'OpenSansLight',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});
