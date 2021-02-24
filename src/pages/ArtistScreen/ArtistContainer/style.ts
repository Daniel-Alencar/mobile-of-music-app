import { StyleSheet } from "react-native";

const styles = StyleSheet .create({
  artistContainer: {
    height: 85,
    justifyContent: 'center',
  },
  artistButton: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 20,
  },
  imageArtist: {
    height: 65,
    width: 65,

    borderRadius: 50,
  },
  artistText:{
    color: '#FFF',
    
    fontSize: 18,
    margin: 10,
  },
});

export default styles;