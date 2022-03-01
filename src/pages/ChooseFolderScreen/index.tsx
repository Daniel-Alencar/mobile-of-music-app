import React from 'react';
import DefaultScreen from '../../components/DefaultScreen';

import { Dropbox } from 'dropbox';
import { TouchableOpacity } from 'react-native';

import { RouteProp } from '@react-navigation/native';

function ChooseFolderScreen(props: { route: RouteProp<{ params: { access_token: string } }, 'params'> }) {
  
  const { access_token } = props.route.params;
  console.log(access_token);
  
  const dropboxAccess = () => {

    var dbx = new Dropbox({ accessToken: access_token });
    dbx.filesListFolder({path: ''})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  return (
    <>
      <DefaultScreen 
        content={
          <>
            <TouchableOpacity 
              style={{ height: 50, backgroundColor: "#ff0" }}
              onPress={dropboxAccess}
            >
            </TouchableOpacity>
          </>
        }
      />
    </>
  );
}

export default ChooseFolderScreen;