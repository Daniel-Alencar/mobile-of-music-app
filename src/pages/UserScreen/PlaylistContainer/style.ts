import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  playlistContainer: {
    height: 65,
    justifyContent: 'center',

    borderWidth: 0,
    borderColor: "#f00",

    width: '100%',
  },
  playlistButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: 20,
    paddingRight: 20,

    borderWidth: 0,
    borderColor: "#ff0",
  },
  playlistImage: {
    height: 55,
    width: 55,
  },
  playlistText: {
    color: '#FFF',
    
    fontSize: 15,
  },
  followersText: { 
    fontSize: 10, 
    color: '#bbb' 
  },
  favoriteButton: {
    borderWidth: 0,
    borderColor: "#ff0",

    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },

  centerTextContainer: {
    alignItems: 'center'
  },
  flexStartTextContainer: {
    marginRight: 10, 
    marginLeft: 10
  }
});

export default styles;