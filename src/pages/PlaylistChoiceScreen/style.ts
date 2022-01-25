import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  generalContainer: { 
    backgroundColor: '#000', 
    flex: 1,

    borderWidth: 0,
    borderColor: '#f0f',
  },

  createNewplaylistView: { 
    height: 100,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 0,
    borderColor: '#f0f',
  },

  addPlaylistButton: {
    height: 65,
    width: 180,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: '#f0f',

    backgroundColor: '#35d244',

    alignItems: 'center',
    justifyContent: 'center',
  },
  addPlaylistButtonText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',

    borderWidth: 0,
    borderColor: '#f0f',
  },
});

export default styles;