import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import CustomIconButton from '../UI/IconButton/CustomIconButton';
import { Pause, PlayArrow, VolumeDown } from '@mui/icons-material';
import { ITrack } from '../../types/track';
import Avatar from "../UI/Avatar/Avatar";
import TrackTitle from '../TracksPage/TracksCard/TrackItem/TrackTitle';
import PlayerProgress from './PlayerProgress';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Player() {
  const isActive = false;
  const track: ITrack = {
    uuid: '1', name: 'Track1', artist: 'Alfred', listens: 0, audio: '', image: 'http://localhost:3001/image/25e457e1-37cf-432d-a780-cd6d4f26519b.jpg', comments: []
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0 }}>
        <Box p={1} display="flex" alignItems="center">
          <CustomIconButton size="medium">
            {isActive
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
