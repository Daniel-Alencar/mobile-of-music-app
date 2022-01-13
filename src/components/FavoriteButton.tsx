import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { changeFavorite } from '../store/MusicPlaylist/MusicPlaylist.actions';

interface propsFavoriteButton {
  isFavorite: boolean,
  indexOfMusic: number,
  width?: number,
}

export default function FavoriteButton(props: propsFavoriteButton) {

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  useEffect(() => {
    setIsFavorite(props.isFavorite);
  }, [props.isFavorite]);

  const dispatch = useDispatch();

  function toggleFavorite() {
    dispatch(changeFavorite(props.indexOfMusic));
    setIsFavorite(!isFavorite);
  }
  
  return(
    <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
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