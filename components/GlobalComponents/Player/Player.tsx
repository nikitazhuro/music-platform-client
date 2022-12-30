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

let audio: any;

export default function Player() {
  const { paused, volume, duration, currentTime, activeTrack } = useTypedSelector(state => state.player)
  const { setPaused, setVolume, setDuration, setCurrentTime } = useActions();

  const play = () => {
    setPaused(false)

    audio.play();
  }

  const pause = () => {
    setPaused(true)

    audio.pause();
  }

  const onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    audio.volume = Number(e.target.value) / 100;
  }

  const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
    audio.currentTime = Number(e.target.value);
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
          <PlayerProgress width={500} left={currentTime} right={duration} onChange={onChangeCurrentTime} />
          <Box sx={{ flexGrow: 3 }} />
          <Box display="flex" alignItems="center" mr={2}>
            <IconButton color="inherit">
              <VolumeDown />
            </IconButton>
            <PlayerProgress left={volume} right={100} onChange={onChangeVolume} />
          </Box>
        </Box>
      </AppBar>
    </React.Fragment>
  );
}
