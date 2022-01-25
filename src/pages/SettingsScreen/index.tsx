import React from 'react';
import { 
  ScrollView, 
  View, 
  Dimensions, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image
} from 'react-native';

import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { MusicBarHeight } from '../../settingsDefault';

export default function SettingsScreen() {

  const navigate = useNavigation();
  const handleToUserScreen = () => {
    navigate.navigate('UserScreen');
  };

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  return (
    <>
      <View style={styles.container}>

        <View style={styles.contentContainerView}>
          <ScrollView style={styles.contentContainer}>
            <TouchableOpacity 
              onPress={handleToUserScreen}
              style={{ 
                height: 70, 
                width: '100%', 
                borderColor: '#f00', 
                borderWidth: 0,

                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            > 
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>

                <View style={{
                  height: 55,
                  width: 55,

                  margin: 10,
                }}>
                  <Image
                    source={require('../../assets/images/User/userImage.png') }
                    style={{ height: 55, width: 55, borderRadius: 50 }}
                  />
                </View>
                <Text style={{
                  fontSize: 20,
                  color: '#fff',
                }}>
                  { "Daniel" }
                </Text>

              </View>
              
              <View style={{ margin: 10 }}>
                <Feather name="chevron-right" color='#fff' size={20}/>
              </View>

            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }} />
    </>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 0,

    flex: 1,

    backgroundColor: '#000',
    height: windowHeight,
    width: windowWidth,
  },
  contentContainerView: {
    width: windowWidth - 2,
    height: windowHeight - 50,
  },
  contentContainer: {
    borderColor: '#0f0',
    borderWidth: 0,

    paddingBottom: '2%',
  },
});