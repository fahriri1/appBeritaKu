import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import DaftarScreen from './screens/DaftarScreen';
import HomeScreen from './screens/HomeScreen';
import Berita1Screen from "./screens/Berita1";
import Berita2Screen from "./screens/Berita2";
import Berita3Screen from "./screens/Berita3";
import Berita4Screen from "./screens/Berita4";
import Berita5Screen from "./screens/Berita5";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Daftar" component={DaftarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita1" component={Berita1Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita2" component={Berita2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita3" component={Berita3Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita4" component={Berita4Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita5" component={Berita5Screen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
