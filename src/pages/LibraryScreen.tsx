import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import NavigationBar from '../components/NavigationBar';

export default function LibraryScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>
          
          <View style={styles.searchBarContainer} >
             <TextInput
              returnKeyType="search"
              style={styles.searchBar}
              placeholder={"Que música você quer ouvir?"}
            />
            
            <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={30} color="#f00"/>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>

      <NavigationBar/>
    </View>
  );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 0,

    backgroundColor: '#000',
    height: windowHeight,
    width: windowWidth,
  },
  contentContainerView: {
    width: windowWidth - 2,
    height: windowHeight - 50,
  },
  contentContainer: {
    borderColor: '#ff0',
    borderWidth: 0,

    padding: '0%',
    paddingTop: '1%',
    paddingBottom: '1%',

  },

  searchBarContainer: {
    borderWidth: 1,
    borderColor: '#fff',

    backgroundColor: '#000000aa',
    width: '100%',
    height: 90,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: '#B7A9A7',
    width: '70%',
    height: 50,

    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },
  xButton: {
    backgroundColor: '#B7A9A7',
    width: 40,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center',

    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
  },
});