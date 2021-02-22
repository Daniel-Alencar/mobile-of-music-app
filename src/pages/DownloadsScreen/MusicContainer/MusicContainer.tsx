import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as InfoMusicActions from '../../../store/actions/infoMusic';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface propsMusicContainer {
  musicName: string,
  imageSource?: ImageSourcePropType,
  centerTextMusic?: boolean,
  artistName: string,
}

function MusicContainer(props: propsMusicContainer) {

  const [isClicked, setIsClicked] = useState(false);
  const navigation = useNavigation();

  function handleNavigateToMusicScreen() {
    navigation.navigate('MusicScreen');
    props.setInitialMusic(props.musicName, props.artistName);
  }

  return(
    <View style={styles.musicContainer}>
      <TouchableOpacity 
        style={styles.musicButton}
        onPress={() => handleNavigateToMusicScreen()}
      >
        
        {props.centerTextMusic ? 
          <>
            <Image
              source={
                props.imageSource ? props.imageSource : require('../../../assets/images/Music/musicDefault.jpg')
              }
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
                source={
                  props.imageSource ? props.imageSource : require('../../../assets/images/Music/musicDefault.jpg')
                }
                style={styles.imageMusic}
              />
              <Text style={styles.musicText}>
                {props.musicName}
              </Text>
            </View>
          </>
        }
        <TouchableOpacity style={styles.favoriteButton} onPress={() => setIsClicked(!isClicked)}>
          <Feather name="heart" size={20} color={isClicked ? '#f00' : 'white'}/>
        </TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
}

function mapStateToProps(state: any) {
  return {

  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(InfoMusicActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicContainer);

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