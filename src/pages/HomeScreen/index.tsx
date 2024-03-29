import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Dimensions, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import PlaylistsContainer from './PlaylistsContainer/PlaylistsContainer';
import ArtistsContainer from './ArtistsContainer/ArtistsContainer';
import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { MusicBarHeight } from '../../settingsDefault';

export default function HomeScreen() {

  const navigation = useNavigation();
  const handleToSettingsScreen = () => {
    navigation.navigate('SettingsScreen');
  }

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#4e4b4b"/>

        <View style={styles.contentContainerView}>
          <ScrollView 
            style={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >

            <TouchableOpacity onPress={handleToSettingsScreen} style={styles.settingsContainer}>
              <Feather name="settings" size={25} color="white"></Feather>
            </TouchableOpacity>

            <ArtistsContainer title="Artistas recomendados"/>
            <PlaylistsContainer title="Playlists recomendadas"/>
            <ArtistsContainer title="Artistas recomendados"/>
            <PlaylistsContainer title="Playlists recomendadas"/>

          </ScrollView>
        </View>

      </SafeAreaView>
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }}/>
    </>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    width: windowWidth,

    borderColor: '#f0f',
    borderWidth: 0,
  },
  contentContainerView: {
    borderColor: '#00f',
    borderWidth: 0,

    height: '100%',
  },
  contentContainer: {
    borderColor: '#f00',
    borderWidth: 0,
  },

  settingsContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1,

    borderColor: '#f0f',
    borderWidth: 0,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
