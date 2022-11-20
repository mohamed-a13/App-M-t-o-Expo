import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet } from 'react-native';
import ImgCurrentWeather from '../ImgCurrentWeather';

const CurrentWeather = ({ dataCurrentWeather }) => {

  useEffect(() => {

  }, [dataCurrentWeather])

  return(
    <View style={styles.containerCurrentWeather}>
      <Text style={styles.name}>{dataCurrentWeather?.name}</Text>
      <Text style={styles.today}>Aujourd'hui</Text>
      <ImgCurrentWeather dataCurrentWeather={dataCurrentWeather} />
      <Text style={styles.temperature}>{Math.round(dataCurrentWeather?.main.temp)}°C</Text>
      <Text style={styles.description}>{dataCurrentWeather?.weather[0] && dataCurrentWeather?.weather[0].description ? dataCurrentWeather.weather[0].description : null}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCurrentWeather: {
    flex: 3,
    justifyContent: 'center',
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  today: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
  },
  temperature: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
  }
});

export default CurrentWeather;

