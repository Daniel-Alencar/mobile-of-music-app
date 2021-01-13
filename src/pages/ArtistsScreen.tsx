import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Text } from 'react-native';
import NavigationBar from '../components/NavigationBar';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <Text style={{ color: 'white', fontSize: 40 }}>
            Hello
          </Text>
          
        </ScrollView>
      </View>

      <NavigationBar/>
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