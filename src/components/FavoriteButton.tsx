import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface propsFavoriteButton {
  isFavorite: boolean,
  width?: number,
}

export default function FavoriteButton(props: propsFavoriteButton) {

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  useEffect(() => {
    setIsFavorite(props.isFavorite);
  }, [props.isFavorite]);
  
  return(
    <TouchableOpacity style={styles.favoriteButton} onPress={() => setIsFavorite(!isFavorite)}>
      <Feather name="heart" size={props.width ? props.width : 22} color={isFavorite ? '#f00' : '#fff'}/>
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