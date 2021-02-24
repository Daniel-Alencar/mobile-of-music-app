import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  playlistContainer: {
    height: 85,
    justifyContent: 'center',
  },
  playlistButton: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 20,
  },
  playlistImage: {
    height: 75,
    width: 75,
  },
  playlistText:{
    color: '#FFF',
    
    fontSize: 18,
    margin: 10,
  },
});

export default styles;