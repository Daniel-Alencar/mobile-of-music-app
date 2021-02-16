import styled from 'styled-components';
import { Dimensions, StyleSheet } from 'react-native';

import FavoriteButton from '../../components/FavoriteButton';

export const TopBar = styled.View`
  border-color: #f00;
  border-width: 0;

  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  justify-content: center;

  padding-left: 16px;
`;
TopBar.Middle = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;

  padding-right: 16px;
`;

TopBar.Left.ToBackScreen = styled.TouchableOpacity`

`;
TopBar.Right.MoreOptions = styled.TouchableOpacity`

`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;

`;
TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

// ==========================================================================

export const ScreenArea = styled.View`
  flex: 1;

  padding-bottom: 32px;
  padding-top: 32px;

  border-color: #f00;
  border-width: 0;
`;

// ==========================================================================

export const CoverArea = styled.View`
  flex: 4;

  border-color: #ff0;
  border-width: 0;
`;

export const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;

  border-color: #ff0;
  border-width: 0;

  padding-left: 32px;
  padding-right: 32px;
`;

PlayerArea.Content = styled.View`
  flex-direction: row;
  padding: 5px 0px;
`;

PlayerArea.Content.Info = styled.View`
  flex: 1;
`;

PlayerArea.Content.Info.Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

PlayerArea.Content.Info.Author = styled.Text`
  color: #bbb;
  font-size: 14px;
`;


PlayerArea.Content.FavoriteButton = styled(FavoriteButton)`

`;

// =======================================================

export const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  border-color: #ff0;
  border-width: 0;

  padding-left: 32px;
  padding-right: 32px;
`;

Controls.Play = styled.TouchableOpacity`

`;
Controls.SkipBack = styled.TouchableOpacity`

`;
Controls.SkipForward = styled.TouchableOpacity`

`;

// =======================================================

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  flatListContainer: {
    borderColor: "#0f0",
    borderWidth: 0,
  },
  contentFlatListContainer: {
  },
  imageContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemFlatListContainer: {
    width: 290,
    height: 290,
  }
});