import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface propsFavoriteButton {
  isFavorite: boolean,
}

export default function FavoriteButton(props: propsFavoriteButton) {
  const [isClicked, setIsClicked] = useState(props.isFavorite);

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