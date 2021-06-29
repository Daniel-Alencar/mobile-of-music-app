import { Audio, AVPlaybackStatus } from 'expo-av';
import songs from './songsOfPlaylist';

export let musicSong: Audio.Sound; 

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

export async function prepareNewSound(index: number, shouldPlay: boolean)  {
  console.log('Carregando o áudio');
  try {
    const { sound } = await Audio.Sound.createAsync(
      songs[index].musicSource,
      { 
        shouldPlay: shouldPlay,
        progressUpdateIntervalMillis: 1000,
      },
      null,
      true
    );
    console.log('Áudio preparado');
    musicSong = sound;

  } catch(error) {
    console.log('ERRO no carregamento do áudio\n' + error + '\n\n');
  }
}

export async function playSound() {
  await musicSong?.playAsync();
}

export async function pauseSound() {
  await musicSong?.pauseAsync();
}

export async function getStatusFromSong() {
  return musicSong.getStatusAsync();
}

export function getCurrentMilliseconds(PlaybackStatus: AVPlaybackStatus) {
  let position: number;

  PlaybackStatus.isLoaded ? 
    (
      PlaybackStatus.positionMillis === undefined ?
        position = 0
      :
        position = PlaybackStatus.positionMillis
    )
  :
    position = 0
  
  return position;
}

export function getMilliseconds(PlaybackStatus: AVPlaybackStatus) {
  let position: number;

  PlaybackStatus.isLoaded ? 
    (
      PlaybackStatus.durationMillis === undefined ?
        position = 0
      :
        position = PlaybackStatus.durationMillis
    )
  :
    position = 0
  
  return position;
}

export function convertMillisInSeconds(millis: number | undefined) {
  if(millis)
    return Math.floor(millis / 1000);
}