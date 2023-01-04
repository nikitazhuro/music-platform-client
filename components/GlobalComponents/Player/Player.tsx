import React, { useEffect } from 'react';
import { Box, AppBar, styled, CssBaseline, IconButton, Fab } from '@mui/material';
import { Pause, PlayArrow, VolumeDown } from '@mui/icons-material';

import Avatar from "../../UI/Avatar/Avatar";
import TrackTitle from '../../PagesComponents/TracksPage/TracksCard/TrackItem/TrackTitle';
import PlayerProgress from './PlayerProgress';
import CustomIconButton from '../../UI/IconButton/CustomIconButton';

import { ITrack } from '../../../types/track';
import { useTypedSelector } from '../../../hooks/typedHooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import TrackProgress from './PlayerComponents/TrackProgress';
import TrackVolume from './PlayerComponents/TrackVolume';

let audio: any;

export default function Player() {
  const { paused, activeTrack, volume } = useTypedSelector(state => state.player)
  const { setPaused, setDuration, setCurrentTime } = useActions();

  const play = () => {
    setPaused(false)
  }

  const pause = () => {
    setPaused(true)
  }

  const initAudio = () => {
    if (activeTrack && 'http://localhost:3001/' + activeTrack.audio !== audio.src) {
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
    <React.Fragment>
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
          <TrackProgress audio={audio} />
          <Box sx={{ flexGrow: 3 }} />
          <TrackVolume audio={audio} />
        </Box>
      </AppBar>
    </React.Fragment>
  );
}
