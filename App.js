import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import CurrentWeather from "./components/CurrentWeather";
import ForecastsWeather from "./components/ForecastsWeather";

const KEY = "089e2d00a63b296393315aa7be5248e1";

const API_URL_WEATHER = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&lang=fr&units=metric`;

const API_URL_FORECASTS = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}&lang=fr&units=metric`;

const App = () => {
  const [dataCurrentWeather, setDataCurrentWeather] = useState(null);
  const [dataForecastsWeather, setDataForecastsWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // Récupération de la position d'utilisateur
  const getPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLoading(true);
    if (status !== "granted") {
      Alert.alert("Veuillez accepter la demande de position");
      await Location.requestForegroundPermissionsAsync();
    } else {
      const position = await Location.getCurrentPositionAsync();
      getCurrentWeather(position);
      getForecastsWeather(position);
    }
  };

  useEffect(() => {
    getPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Récupération de la météo actuel
  const getCurrentWeather = async (location) => {
    await axios
      .get(API_URL_WEATHER(location.coords.latitude, location.coords.longitude))
      .then((response) => {
        setDataCurrentWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert("Une erreur est survenue.");
        setLoading(false);
      });
  };

  // Récupération des prévisions
  const getForecastsWeather = async (location) => {
    await axios
      .get(
        API_URL_FORECASTS(location.coords.latitude, location.coords.longitude)
      )
      .then((response) => {
        setDataForecastsWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert("Une erreur est survenue.");
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <View style={styles.containerActivity}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <CurrentWeather dataCurrentWeather={dataCurrentWeather} />
        <ForecastsWeather dataForecastsWeather={dataForecastsWeather} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  containerActivity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#E2E6E1",
    padding: 8,
  },
});

export default App;
