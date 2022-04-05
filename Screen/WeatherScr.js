import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
  Dimensions,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service'
import HourlyCard from '../Component/HourlyCard';
import DailyCard from '../Component/DailyCard';
import loadImage from '../assets/loadImage';
import loadColor from '../assets/loadColor';
import axios from 'axios';

const WeatherScreen = () => {
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);
  const [forecast, setForcast] = useState(null);
  const [current, setCurrent] = useState(null);
  const [refreshsing, setRefresh] = useState(true);
  const [isLoading, setLoading] = useState(false);
  let urls;

  Geolocation.getCurrentPosition(
    (position) => {
      if (position.coords.latitude && position.coords.longitude) {
        setLat(JSON.stringify(position.coords.latitude));
        setLong(JSON.stringify(position.coords.longitude));
      }
    },
    (error) => {
      console.log(error);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );



  if (lat && long) {
    urls = [
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=vi&units=metric&appid=239cf41f2594bf5e8bf013e86deb8083`,
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=vi`,
    ];
  }



  function loadData() {
    if (urls) {
      Promise.all(urls.map(url => axios.get(url))).then(
        ([{ data: forecast }, { data: current }]) => {
          setForcast(forecast);
          setCurrent(current);
          setRefresh(false);
        },
      );
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (!forecast || !current) {
    return (
      <View
        style={{
          backgroundColor: '#222',
        }}>
        {loadData()}
      </View>
    );
  } else {
    return (
      <ImageBackground
        style={{
          height: Dimensions.get('window').height,
        }}
        resizeMode="cover"
        source={loadImage(forecast.current.weather[0].icon)}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl refreshing={refreshsing} onRefresh={loadData} />
          }>
          <Text style={styles.city}>{current.locality}</Text>
          <View style={styles.viewtemp}>
            <Text style={styles.temp}>{Math.round(forecast.current.temp)}</Text>
            <Text style={styles.temp}>°</Text>
          </View>
          <Text style={styles.condition}>
            {forecast.current.weather[0].main}
          </Text>
          <Text style={styles.mm}>
            H:{Math.round(forecast.daily[0].temp.max)}° L:
            {Math.round(forecast.daily[0].temp.min)}°
          </Text>
          <View
            style={[
              styles.hourlyList,
              { backgroundColor: loadColor(forecast.current.weather[0].icon) },
            ]}>
            <Text style={styles.hourfc}>HOURLY FORECAST</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={forecast.hourly.slice(0, 24)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <HourlyCard item={item} />}
            />
          </View>
          <View
            style={[
              styles.dailyList,
              { backgroundColor: loadColor(forecast.current.weather[0].icon) },
            ]}>
            <Text style={styles.dayfc}>7-DAY FORECAST</Text>
            <FlatList
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={forecast.daily}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <DailyCard item={item} />}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
};

export default WeatherScreen;

const styles = StyleSheet.create({
  city: {
    fontFamily: 'OpenSansLight',
    fontSize: 30,
    marginTop: 60,
    textAlign: 'center',
    color: '#f0f8ff',
  },
  viewtemp: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  temp: {
    fontFamily: 'OpenSansLight',
    fontSize: 70,
    textAlign: 'center',
  },
  condition: {
    fontFamily: 'OpenSansLight',
    fontSize: 15,
    textAlign: 'center',
  },
  mm: {
    fontFamily: 'OpenSansLight',
    fontSize: 16,
    opacity: 0.85,
    textAlign: 'center',
    marginTop: 5,
  },
  hourfc: {
    fontFamily: 'OpenSansLight',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginLeft: 25,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  hourlyList: {
    marginLeft: 15,
    marginTop: 55,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 15,

    backgroundColor: 'rgba(147, 149, 151,0.6)',
  },
  dayfc: {
    fontFamily: 'OpenSansLight',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  dailyList: {
    marginLeft: 15,
    marginTop: 30,
    borderRadius: 15,
    marginRight: 15,
    marginEnd: 15,
    backgroundColor: 'rgba(147, 149, 151,0.6)',
    padding: 15,
    paddingLeft: 25,
    height: 260,
  },
});
