import { StyleSheet } from "react-native";
import { 
  windowWidth
} from "../../settingsDefault";

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#000',

    flex: 1,
  },
  mainInformationContainer: {
    borderColor: '#f0f',
    borderWidth: 0,

    height: 250,
    width: "100%",

    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    borderColor: '#f0f',
    borderWidth: 0,
  },
  userImage: {
    height: 150,
    width: 150,

    borderRadius: 100
  },
  username: {
    borderColor: '#f0f',
    borderWidth: 0,

    fontSize: 16,
    color: '#fff',

    margin: 5,
  },
  numbersInformationContainer: {
    borderColor: '#f0f',
    borderWidth: 0,

    height: 40,
    width: windowWidth - 30,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  numberInformation: {
    borderColor: '#f00',
    borderWidth: 0,

    fontSize: 16,
    color: '#c4c4c4',
  },

  typesOfPlaylistsContainer: {
    width: '100%',
  }
});

export default styles;