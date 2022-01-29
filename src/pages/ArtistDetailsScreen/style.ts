import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: '#000000ff',

    flex: 1,
    width: '100%',
  },

  shortInformationsContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 0,
    borderColor: "#f00",

    height: 250,
    width: '100%',
  },
  artistImage: {
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 0,
    borderColor: "#f00",
    borderRadius: 100,

    height: 140,
    width: 140,
  },
  artistName: {
    color: '#fff',
    fontSize: 22,

    padding: 6,
  },
  followButton: {
    borderColor: '#42E12C',
    borderWidth: 0,
    borderRadius: 50,

    height: 25,
    paddingLeft: 15,
    paddingRight: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },


  shuffleButtonContainer: {
    borderColor: '#f0f',
    borderWidth: 0,
    backgroundColor: '#000',

    height: 27.5,
    marginBottom: 30,

    alignItems: 'center',
  },
  shuffleButton: {
    borderRadius: 30,
    backgroundColor: '#42E12C',

    height: 55,
    width: 180,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },
  shuffleButtonText: {
    color: '#fff',
    fontSize: 15,
  },

  musicsView: { 
    borderWidth: 0,
    borderColor: "#f00",
    width: '100%',

    alignItems: 'center',

    padding: 10
  },
  musicsViewText: { 
    borderWidth: 0,
    borderColor: "#f00",

    width: '70%',
    
    color: '#fff',
    fontSize: 18,

    alignItems:'center',
    textAlign: 'center'

  },
});

export default styles;