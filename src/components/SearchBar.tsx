import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function SearchBar() {
  const [textOnSearchBar, setTextOnSearchBar] = useState("");

  function clearInput() {
    setTextOnSearchBar("");
  }

  return (
    <View style={styles.container} >
      <TextInput
        returnKeyType="search"
        style={styles.searchBar}
        onChangeText={(text) => setTextOnSearchBar(text)}
        value={textOnSearchBar}
        placeholder={"Que música você quer ouvir?"}
      />
  
      <RectButton onPress={() => clearInput()} style={styles.xButton}>
        <Feather name="x" size={30} color="#f00"/>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderColor: '#fff',

    backgroundColor: '#000000aa',
    width: '100%',
    height: 70,

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

    // Porque o borderRadius direcionado para os cantos isolados do botão (rectButton) não funcionam
    marginLeft: 10,
  },
  xButton: {
    backgroundColor: '#B7A9A7',
    width: 40,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,

    // Porque o borderRadius direcionado para os cantos isolados do botão (rectButton) não funcionam
    position: 'relative',
    right: 10,
  },
});