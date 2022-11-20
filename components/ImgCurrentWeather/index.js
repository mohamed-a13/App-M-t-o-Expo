import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

const Img = ({ dataCurrentWeather }) => {

  return(
    <Image source={{ uri: getIcon(dataCurrentWeather?.weather[0] && dataCurrentWeather?.weather[0]?.icon ? dataCurrentWeather?.weather[0]?.icon: null) }} style={styles.image} />
  )

};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
});

export default Img;