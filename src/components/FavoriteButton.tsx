import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function FavoriteButton() {
  const [isClicked, setIsClicked] = useState(false);

  return(
    <TouchableOpacity style={styles.favoriteButton} onPress={() => setIsClicked(!isClicked)}>
      <Feather name="heart" size={20} color={isClicked ? '#f00' : 'white'}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favoriteButton: {
    borderWidth: 0,
    borderColor: "#ff0",

    justifyContent: 'center',
    alignItems: 'center',
  },
});