import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface propsFavoriteButton {
  isFavorite: boolean,
  width?: number,
}

export default function FavoriteButton(props: propsFavoriteButton) {
  const [isClicked, setIsClicked] = useState(props.isFavorite);

  return(
    <TouchableOpacity style={styles.favoriteButton} onPress={() => setIsClicked(!isClicked)}>
      <Feather name="heart" size={props.width ? props.width : 22} color={isClicked ? '#f00' : 'white'}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 0,
    borderColor: 'red',
    width: 40,
  },
});