import React, { useEffect } from 'react';
import { Box, AppBar, CssBaseline } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';

import Avatar from "../../UI/Avatar/Avatar";
import TrackTitle from '../../PagesComponents/TracksPage/TrackItem/TrackTitle';
import CustomIconButton from '../../UI/IconButton/CustomIconButton';
import TrackProgressRoot from './PlayerComponents/TrackProgress/TrackProgressRoot';
import PlayerVolume from './PlayerComponents/PlayerVolume';

import { useTypedSelector } from '../../../hooks/typedHooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import {
  getActiveTrackArtist,
  getActiveTrackAudio,
  getActiveTrackImage,
  getActiveTrackName,
  getPlayerPaused,
  getPlayerVolume,
} from '../../../store/selectors/playerSelectors';

let audio: any;

const PlayerRoot: React.FC = () => {
  const activeTrackName = useTypedSelector(getActiveTrackName);
  const activeTrackArtist = useTypedSelector(getActiveTrackArtist);
  const activeTrackAudio = useTypedSelector(getActiveTrackAudio);
  const activeTrackImage = useTypedSelector(getActiveTrackImage);
  const paused = useTypedSelector(getPlayerPaused);
  const volume = useTypedSelector(getPlayerVolume);

  const { setPaused, setCurrentTime } = useActions();

  const play = () => {
    setPaused(false)
  }

  const pause = () => {
    setPaused(true)
  }

  const initAudio = () => {
    if (activeTrackAudio && ('http://localhost:3001/' + activeTrackAudio) !== audio.src) {
      audio.src = 'http://localhost:3001/' + activeTrackAudio;
      audio.volume = volume / 100;

      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime)
      }

      audio.onended = () => audio.play();

      play();
    }
  };

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      initAudio();
    }
  }, [activeTrackAudio])

  useEffect(() => {
    if (paused) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [paused, activeTrackAudio])

  if (!activeTrackAudio) {
    audio?.pause();
    audio = null;

    return null
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0 }}>
        <Box p={1} display="flex" alignItems="center">
          <CustomIconButton onClick={paused ? play : pause} size="medium">
            {!paused
              ? (
                <Pause />
              )
              : (
                <PlayArrow />
              )}
          </CustomIconButton>
          <Box display="flex" alignItems="center" mr={2} ml={1}>
            {activeTrackImage && (
              <Avatar src={'http://localhost:3001/' + activeTrackImage} width={50} height={50} />
            )}
          </Box>
          <TrackTitle trackName={activeTrackName} artist={activeTrackArtist} />
          <Box sx={{ flexGrow: 1 }} />
          <TrackProgressRoot audio={audio} />
          <Box sx={{ flexGrow: 3 }} />
          <PlayerVolume audio={audio} />
        </Box>
      </AppBar>
    </>
  );
}

export default PlayerRoot;
