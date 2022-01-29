import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity,
  Text,
  Switch,
  Image,
} from 'react-native';

import styles from './style';

import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { MusicBarHeight } from '../../settingsDefault';
import SimpleMusicContainer from '../UploadMusicsScreen/SimpleMusicContainer';

export default function PlaylistScreen() {

  const [switchValue, setSwitchValue] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // ===================================================================

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  return(
    <>
      <View style={styles.generalContainer}>

        <ScrollView
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={false}
          overScrollMode="never" 
        >
        
          <View style={styles.linearGradient}>

            <View style={styles.shortInformationsContainer}>

              <Image
                source={require('../../assets/images/Playlist/Continuum.jpg')}
                style={styles.playlistImage}
              />

              <Text style={styles.playlistName}>
                Evangélicas - Adoração
              </Text>

              <TouchableOpacity
                style={{
                  ...styles.followButton,
                  borderColor: isFollowing ? '#42E12C' : '#fff',
                }}
                onPress={() => setIsFollowing(!isFollowing)}
              >
                <Text style={{ color: '#fff', fontSize: 12 }}>
                {
                  isFollowing
                  ? "FOLLOWING"
                  : "FOLLOW"
                }
                </Text>
              </TouchableOpacity>

            </View>

          </View>
          
          <View style={styles.shuffleButtonContainer}>
            <TouchableOpacity style={styles.shuffleButton}>
              <Text style={styles.shuffleButtonText}>
                Tocar aleatoriamente
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 30, width: '100%', backgroundColor: '#000', zIndex: 10 }}></View>

          <View style={styles.downloadContainer}>
            <Text style={styles.downloadText}>
              Download
            </Text>

            <Switch 
              value={switchValue}
              onValueChange={(value) => setSwitchValue(value)}
              style={styles.switchButton}
              thumbColor={"#538631"}
              trackColor={{
                false: "#818181",
                true: "#81e014"
              }}
            />
          </View>

          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />
          <SimpleMusicContainer
            rightIcon='more-vertical'
            centerText={false}
            rightFunction={() => {}}
          />

        </ScrollView>
      </View>
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }} />
    </>
  );
}