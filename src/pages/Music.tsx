import { Audio } from 'expo-av';
import songs from './songsOfPlaylist';

let musicSong;
let playing = false;

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
        shouldPlay: false,
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

export async function playOrPauseMusic() {
  if(playing) {
    await pauseSound();
  } else {
    await playSound();
  }
}

export function playSound() {
  console.log('Tocando o áudio');
  playing = true;
}

export function pauseSound() {
  console.log('Pausando o áudio');
  playing = false;
}