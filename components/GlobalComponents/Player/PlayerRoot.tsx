import React, { useEffect } from 'react';
import { Box, AppBar, CssBaseline, IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';

import Avatar from "../../UI/Avatar/Avatar";
import TrackTitle from '../../PagesComponents/TracksPage/TrackItem/TrackTitle';
import CustomIconButton from '../../UI/IconButton/CustomIconButton';
import TrackProgressRoot from './PlayerComponents/TrackProgress/TrackProgressRoot';
import PlayerVolume from './PlayerComponents/PlayerVolume';

import { useTypedSelector } from '../../../hooks/typedHooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

let audio: any;

const PlayerRoot: React.FC = () => {
  const { paused, activeTrack, volume } = useTypedSelector(state => state.player)
  const { setPaused, setDuration, setCurrentTime } = useActions();

  const play = () => {
    setPaused(false)
  }

  const pause = () => {
    setPaused(true)
  }

  const initAudio = () => {
    if (activeTrack && ('http://localhost:3001/' + activeTrack.audio) !== audio.src) {
      audio.src = 'http://localhost:3001/' + activeTrack.audio;
      audio.volume = volume / 100;

      audio.onloadedmetadata = () => {
        setDuration(audio.duration)
      }

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
  }, [activeTrack])

  useEffect(() => {
    if (paused) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [paused, activeTrack])

  if (!activeTrack) return null;

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
            <Avatar src={'http://localhost:3001/' + activeTrack?.image} width={50} height={50} />
          </Box>
          <TrackTitle trackName={activeTrack?.name} artist={activeTrack?.artist} />
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
