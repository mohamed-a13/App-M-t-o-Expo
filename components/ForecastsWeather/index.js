import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import ImgForecastsWeather from "../ImgForecastsWeather";

const ForecastsWeather = ({ dataForecastsWeather }) => {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    const forecastData = dataForecastsWeather?.list.map((forecast) => {
      const dateTime = new Date(forecast.dt * 1000);
      return {
        date: dateTime,
        hour: dateTime.getHours(),
        temperature: Math.round(forecast.main.temp),
        icon: forecast.weather[0].icon,
        name: format(dateTime, "EEEE", { locale: fr }),
      };
    });
    setForecasts(forecastData);
  }, [dataForecastsWeather]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.containerForecastsWeather}
    >
      {forecasts?.map((forecast, index) => {
        return (
          <View key={index} style={styles.forecast}>
            <Text style={styles.name}>{forecast.name}</Text>
            <Text style={styles.hour}>{forecast.hour}h</Text>
            <ImgForecastsWeather forecastIcon={forecast.icon} />
            <Text style={styles.temperature}>{forecast.temperature}°C</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerForecastsWeather: {
    flex: 3,
  },
  name: {
    fontSize: 12,
  },
  hour: {
    fontSize: 12,
  },
  forecast: {
    backgroundColor: "white",
    borderRadius: 50,
    marginRight: 8,
    height: 140,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForecastsWeather;
