import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Song from '../screens/song/Song';
import Playlist from '../screens/playlist/Playlist';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{}}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Playlist" component={Playlist} options={{ headerShown: false }} />
        <Stack.Screen name="Song" component={Song} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}