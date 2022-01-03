import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import songs from '../pages/songsOfPlaylist';

import { useDispatch, useSelector } from 'react-redux';
import * as infoMusicActions from '../store/infoMusic/infoMusic.actions';

import { Feather } from '@expo/vector-icons';

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

  // const dispatch = useDispatch();
  // const propsFromRedux = useSelector((state: any) => {
  //   return {
  //     isFavorite: state.infoMusic.isFavorite
  //   }
  // });

  function toggleFavorite() {
    // dispatch(infoMusicActions.changeFavorite(!isFavorite));
    songs[props.indexOfMusic].favorite = !isFavorite;
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