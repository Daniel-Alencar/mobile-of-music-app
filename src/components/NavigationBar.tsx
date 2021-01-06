import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Dimensions } from 'react-native';

export default function() {
  return (
    <View style={styles.navigationBar}>
      <View style={styles.subNavigationBar}>
        <TouchableOpacity style={styles.itemNavigationBar} onPress={() => {}}>
          <Image
            style={styles.icon}
            source={require('../images/home-icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNavigationBar} onPress={() => {}}>
          <Image
            style={styles.icon}
            source={require('../images/search-icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNavigationBar} onPress={() => {}}>
          <Image
            style={styles.icon}
            source={require('../images/library-icon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#4e4b4b',

    borderColor: '#0f0',
    borderWidth: 0,

    alignItems: 'center',

    height: 50,
    width: windowWidth,
  },
  subNavigationBar: {
    borderColor: '#0f0',
    borderWidth: 0,

    height: '100%',
    width: '60%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemNavigationBar: {
    borderColor: '#0ff',
    borderWidth: 0,

    height: '100%',
    width: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 35,
    width: 35,
  },
});