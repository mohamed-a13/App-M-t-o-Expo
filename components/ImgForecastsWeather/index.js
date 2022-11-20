import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

const Img = ({ forecastIcon }) => {

  return(
    <Image source={{ uri: getIcon(forecastIcon) }} style={styles.image} />
  )

};

const styles = StyleSheet.create({
  image: {
    marginVertical: 5,
    height: 50,
    width: 50,
  },
});

export default Img;