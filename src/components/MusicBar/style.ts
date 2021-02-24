import { StyleSheet, Dimensions } from 'react-native';


const defaultDimension = 65;
const defaultColorText = '#fff';
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderWidth: 0,
    borderColor: 'red',

    backgroundColor: '#4e4b4b',

    width: windowWidth,
    height: defaultDimension,
  },
  leftContainer: {
    borderWidth: 0,
    borderColor: 'red',

    flex: 1,

    flexDirection: 'row',
  },
  textContainer: {
    borderWidth: 0,
    borderColor: 'red',

    justifyContent: 'center',

    padding: 10,
  },
  musicName: {
    color: defaultColorText,
  },
  artistName: {
    color: '#bbb',
  },
  rightContainer: {
    borderWidth: 0,
    borderColor: 'red',

    flexDirection: 'row',
  },
  musicImage: {
    width: defaultDimension,
    height: defaultDimension,
  },

  playAndPauseButton: {
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    width: 50,
  }
});

export default styles;