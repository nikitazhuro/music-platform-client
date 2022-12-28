import * as React from 'react';
import { Box, AppBar, styled, CssBaseline, IconButton, Fab } from '@mui/material';
import { Pause, PlayArrow, VolumeDown } from '@mui/icons-material';

import Avatar from "../../UI/Avatar/Avatar";
import TrackTitle from '../../PagesComponents/TracksPage/TracksCard/TrackItem/TrackTitle';
import PlayerProgress from './PlayerProgress';
import CustomIconButton from '../../UI/IconButton/CustomIconButton';

import { ITrack } from '../../../types/track';
import { useTypedSelector } from '../../../hooks/typedHooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

let audio: any;

export default function Player() {
  const { paused } = useTypedSelector((state) => state.player);
  const { setPaused } = useActions();

  const track: ITrack = {
    uuid: '1', name: 'Track1', artist: 'Alfred', listens: 0, audio: 'http://localhost:3001/audio/1ed0896e-ffa4-40c0-95cf-f63ca821e7be.mp3', image: 'http://localhost:3001/image/25e457e1-37cf-432d-a780-cd6d4f26519b.jpg', comments: []
  }

  const play = (e: React.MouseEvent) => {
    e.stopPropagation();

    setPaused(false)

    audio.play();
  }

  const pause = (e: React.MouseEvent) => {
    e.stopPropagation();

    setPaused(true)

    audio.pause();
  }

  React.useEffect(() => {
    if (!audio) {
      audio = new Audio();

      audio.src = track.audio;
    }
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0 }}>
        <Box p={1} display="flex" alignItems="center">
          <CustomIconButton onClick={paused ? play : pause} size="medium">
            {paused
              ? (
                <Pause />
              )
              : (
                <PlayArrow />
              )}
          </CustomIconButton>
          <Box display="flex" alignItems="center" mr={2} ml={1}>
            <Avatar src={track.image} width={50} height={50} />
          </Box>
          <TrackTitle trackName={track.name} artist={track.artist} />
          <Box sx={{ flexGrow: 1 }} />
          <PlayerProgress width={500} left={50} right={100} onChange={() => console.log()} />
          <Box sx={{ flexGrow: 3 }} />
          <Box display="flex" alignItems="center" mr={2}>
            <IconButton color="inherit">
              <VolumeDown />
            </IconButton>
            <PlayerProgress left={0} right={100} onChange={() => console.log()} />
          </Box>
        </Box>
      </AppBar>
    </React.Fragment>
  );
}
