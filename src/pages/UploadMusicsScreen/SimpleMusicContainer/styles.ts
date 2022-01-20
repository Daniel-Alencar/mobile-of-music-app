import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  MusicContainer: {
    height: 65,
    justifyContent: 'center',

    borderWidth: 0,
    borderColor: "#f00",

    width: '100%',
  },
  MusicButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: 20,
    paddingRight: 20,

    borderWidth: 0,
    borderColor: "#ff0",
  },
  MusicImage: {
    height: 55,
    width: 55,

    borderWidth: 0,
    borderColor: "#f00",
  },
  MusicText: {
    color: '#FFF',
    fontSize: 15,

    borderWidth: 0,
    borderColor: "#f00",
  },
  artistName: { 
    fontSize: 10, 
    color: '#bbb',

    borderWidth: 0,
    borderColor: "#f00",
  },

  flexStartTextContainer: {
    marginRight: 10, 
    marginLeft: 10,

    borderWidth: 0,
    borderColor: "#f00",
  },

  trashButton: {
    borderWidth: 0,
    borderColor: "#f00",

    height: 35,
    width: 35,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;