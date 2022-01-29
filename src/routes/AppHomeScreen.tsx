import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import PlaylistScreen from '../pages/PlaylistScreen';
import ArtistDetailsScreen from '../pages/ArtistDetailsScreen';
import SettingsScreen from '../pages/SettingsScreen';
import MusicScreen from '../pages/MusicScreen';
import UserScreen from '../pages/UserScreen';
import UploadMusicsScreen from '../pages/UploadMusicsScreen';
import PlaylistChoiceScreen from '../pages/PlaylistChoiceScreen';
import PlaylistCreationScreen from '../pages/PlaylistCreationScreen';

import Header from '../components/Header';

const Stack = createStackNavigator();
export default function AppHomeScreen() {

  const navigate = useNavigation()

  return(
    <>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: true, 
          header: () => <Header /> 
        }}
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PlaylistScreen" 
          component={PlaylistScreen} 
          options={{ headerShown: true, header: () => <Header title="Playlist"/> }}
        />
        <Stack.Screen 
          name="ArtistDetailsScreen" 
          component={ArtistDetailsScreen}
          options={{ headerShown: true, header: () => <Header title="Artista"/> }} 
        />
        <Stack.Screen 
          name="SettingsScreen" 
          component={SettingsScreen}
          options={{ headerShown: true, header: () => <Header title="Configurações"/> }}  
        />
        <Stack.Screen 
          name="MusicScreen" 
          component={MusicScreen}
          options={{ headerShown: false, header: () => <Header title="Tela de Música"/> }}  
        />
        <Stack.Screen 
          name="UserScreen" 
          component={UserScreen}
          options={{ 
            headerShown: true, 
            header: () => 
              <Header 
                title="Meu Perfil" 
                rightIcon='file-plus'
                rightFunction={() => navigate.navigate('UploadMusicsScreen')}
              /> 
          }}  
        />
        <Stack.Screen 
          name="UploadMusicsScreen" 
          component={UploadMusicsScreen}
          options={{ headerShown: true, header: () => <Header title="Adicionando música"/> }}  
        />
        <Stack.Screen 
          name="PlaylistChoiceScreen" 
          component={PlaylistChoiceScreen}
          options={{ headerShown: true, header: () => <Header title="Adicionando a uma playlist"/> }}  
        />
        <Stack.Screen 
          name="PlaylistCreationScreen" 
          component={PlaylistCreationScreen}
          options={{ headerShown: true, header: () => <Header title="Criando Playlist"/> }}  
        />
        <Stack.Screen 
          name="ActualPlaylistScreen" 
          component={PlaylistCreationScreen}
          options={{ headerShown: true, header: () => <Header title="Actual Playlist"/> }}  
        />
      </Stack.Navigator>
    </>
  );
}
