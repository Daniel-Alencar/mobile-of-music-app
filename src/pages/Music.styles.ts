import styled from 'styled-components';

import FavoriteButton from '../components/FavoriteButton';

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
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;

// ==========================================================================

export const CoverArea = styled.View`
  flex: 4;
  padding-top: 20px;
`;

CoverArea.Image = styled.Image`
  
  flex: 1;
  width: 100%;
`;

export const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
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
`;

Controls.Play = styled.TouchableOpacity`

`;
Controls.SkipBack = styled.TouchableOpacity`

`;
Controls.SkipForward = styled.TouchableOpacity`

`;