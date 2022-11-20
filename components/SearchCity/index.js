import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchCity = () => {

  return(
    <View style={styles.containerSearchCity}>
      <Text>SearchCity</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  containerSearchCity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SearchCity;