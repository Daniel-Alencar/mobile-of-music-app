import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity,
  Text,
  Switch,
  Image,
  FlatList,
} from 'react-native';

import styles from './style';

import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { MusicBarHeight } from '../../settingsDefault';
import SimpleMusicContainer from '../UploadMusicsScreen/SimpleMusicContainer';

export default function PlaylistScreen() {

  const [switchValue, setSwitchValue] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [FlatListIndex, setFlatListIndex] = useState(true);

  // ===================================================================

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  // ===================================================================

  let components: JSX.Element[] = []
  components.push(
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
  )
  components.push(
    <View style={styles.shortInformationsContainer}>
      <Image
        source={require('../../assets/images/Artist/JohnMayer.png')}
        style={{ height: 100, width: 100, borderRadius: 100 }}
      />

      <Text style={{
        color: "#fff",
        fontSize: 13,

        margin: 15,
        marginTop: 0
      }}>
        John Mayer
      </Text>

      <Text style={{ 
        color: '#fff',
        fontSize: 15,

        width: '70%',

        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Músicas de louvor e adoração aquele que é digno de toda a glória
      </Text>
    </View>
  )
  const render = (index: number) => {
    setFlatListIndex(index === 0 ? true : false);
    return components[index];
  };
  

  return(
    <>
      <View style={styles.generalContainer}>

        <ScrollView
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={false}
          overScrollMode="never" 
        >
        
          <View style={styles.linearGradient}>

            <FlatList style={styles.flatList}
              pagingEnabled
              overScrollMode="never" 
              showsHorizontalScrollIndicator={false}
              horizontal

              data={components}
              renderItem={({ index }) => render(index)}
            />

            <View style={{ 
              height: 25, 
              flexDirection: 'row', 
              alignItems: 'center',  
              justifyContent: 'center',

              borderWidth: 0,
              borderColor: "#f00",
              paddingBottom: 10
            }}>
              <View style={{ 
                height: 10, 
                width: 10, 
                borderRadius: 100, 
                backgroundColor: false ? '#818181' : '#fff',
                margin: 2,
              }}/>
              <View style={{ 
                height: 10, 
                width: 10, 
                borderRadius: 100, 
                backgroundColor: false ? '#fff' : '#818181',
                margin: 2,
              }}/>
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