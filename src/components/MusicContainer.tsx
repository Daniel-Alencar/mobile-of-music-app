import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface propsMusicContainer {
  musicName: string,
  image: string,
  centerTextMusic?: boolean,
}

export default function MusicContainer(props: propsMusicContainer) {
  return(
    <View style={styles.musicContainer}>
      <TouchableOpacity style={styles.musicButton}>
        
        {props.centerTextMusic ? 
          <>
            <Image
              source={props.image}
              style={styles.imageMusic}
            />

            <Text style={styles.musicText}>
              {props.musicName}
            </Text>
          </>
        : 
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Image
                source={props.image}
                style={styles.imageMusic}
              />
              <Text style={styles.musicText}>
                {props.musicName}
              </Text>
            </View>
          </>
        }
        <TouchableOpacity style={styles.favoriteButton}>
          <Feather name="heart" size={20} color={"white"}/>
        </TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  musicContainer: {
    height: 65,
    justifyContent: 'center',

    borderWidth: 0,
    borderColor: "#f00",
  },
  musicButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: 20,
    paddingRight: 20,

    borderWidth: 0,
    borderColor: "#ff0",
  },
  imageMusic: {
    height: 55,
    width: 55,
  },
  musicText: {
    color: '#FFF',
    
    fontSize: 15,
    margin: 10,
  },
  favoriteButton: {
    borderWidth: 0,
    borderColor: "#ff0",

    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
});