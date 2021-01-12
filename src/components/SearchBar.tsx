import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function() {
  const [textOnSearchBar, setTextOnSearchBar] = useState("");

  return (
    <View style={styles.searchBarContainer} >
        <TextInput
        returnKeyType="search"
        style={styles.searchBar}
        onChangeText={(text) => setTextOnSearchBar(text)}
        value={textOnSearchBar}
        placeholder={"Que música você quer ouvir?"}
        />
    
        <TouchableOpacity style={styles.xButton}>
            <Feather name="x" size={30} color="#f00"/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    borderWidth: 0,
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
    width: '75%',
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