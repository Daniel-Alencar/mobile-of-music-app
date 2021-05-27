import { Audio } from 'expo-av';
import songs from './songsOfPlaylist';

export async function setSettingsInAudio() {
  try {
    await Audio.setAudioModeAsync({
      staysActiveInBackground: true,

      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    console.log('Configuração realizada com sucesso');
  } catch(error) {
    console.log('\nErro na definição das configurações do Audio\n=> ' + error);
  }
}

export async function prepareNewSound()  {
  console.log('Carregando o áudio');
  try {
    const { sound } = await Audio.Sound.createAsync(
      songs[0].musicSource,
      { 
        shouldPlay: true,
        progressUpdateIntervalMillis: 1000,
      },
      null,
      true
    );
    console.log('Tocando o áudio');

    // setSound(sound);
    // setPlaying(true);
    
    // const status = await sound.getStatusAsync();
    // const durationInSeconds = convertMillisInSeconds(
    //   status.isLoaded ?
    //     status.durationMillis === undefined ?
    //       0
    //     :
    //       status.durationMillis
    //   :
    //     0
    // );
    
    // setMusicDurationInSeconds(durationInSeconds);
    // setMusicDuration(convertSecondsToTimeInString(durationInSeconds));

  } catch(error) {
    console.log('ERRO no carregamento do áudio\n' + error + '\n\n');
  }
}