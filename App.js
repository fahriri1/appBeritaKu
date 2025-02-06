import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import DaftarScreen from './screens/DaftarScreen';

import HomeScreen from './screens/HomeScreen';
import SimpanScreen from "./screens/simpanScreen";
import AkunScreen from "./screens/akunScreen";

import SearchScreen from './screens/berita/searchScreen';
import Berita1Screen from "./screens/berita/Berita1";
import Berita2Screen from "./screens/berita/Berita2";
import Berita3Screen from "./screens/berita/Berita3";
import Berita4Screen from "./screens/berita/Berita4";
import Berita5Screen from "./screens/berita/Berita5";

import ContactScreen from "./screens/setting/contactScreen";
import SettingScreen from './screens/setting/settingScreen';
import PasswordScreen from './screens/setting/passwordScreen';
import KelolaAkun from './screens/setting/kelolanAkun';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Daftar" component={DaftarScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Simpan" component={SimpanScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Akun" component={AkunScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Berita1" component={Berita1Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita2" component={Berita2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita3" component={Berita3Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita4" component={Berita4Screen} options={{ headerShown: false }} />
        <Stack.Screen name="Berita5" component={Berita5Screen} options={{ headerShown: false }} />

        <Stack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="KelolaAkun" component={KelolaAkun} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
