import React from 'react';
import { 
  ScrollView, 
  View, 
  Dimensions, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native';

import {Feather} from '@expo/vector-icons';

import { useAuth } from '../../context/auth';

export default function SettingsScreen() {

  const { signOut, user } = useAuth();
  console.log('SettingsScreens => Quem é o usuário? ' + user);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>
          <TouchableOpacity 
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
                borderRadius: 50,
                backgroundColor: '#f00',
                height: 55,
                width: 55,

                margin: 10,
              }}>
              </View>
              <Text style={{
                fontSize: 20,
                color: '#fff',
              }}>
                { user?.name }
              </Text>

            </View>
            
            <View style={{ margin: 10 }}>
              <Feather name="chevron-right" color='#fff' size={20}/>
            </View>

          </TouchableOpacity>
          <TouchableOpacity 
            style={{ 
              height: 50, 
              width: '100%', 
              marginTop: 10, 
              justifyContent: 'center', 
              alignItems: 'center',
              backgroundColor: '#f00'
            }}
            onPress={handleSignOut}
          >
            <Text>Sign out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 0,

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