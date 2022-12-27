import { Box, Grid } from "@mui/material";
import { ITrack } from "../../../types/track";
import TrackItem from "./TrackItem/TrackItem";

function TracksList() {
  const tracks: Array<ITrack> = [
    { uuid: '1', name: 'Track1', artist: 'Alfred', listens: 0, audio: '', image: 'http://localhost:3001/image/25e457e1-37cf-432d-a780-cd6d4f26519b.jpg', comments: [] },
    { uuid: '2', name: 'Track2', artist: 'John', listens: 0, audio: '', image: 'http://localhost:3001/image/25e457e1-37cf-432d-a780-cd6d4f26519b.jpg', comments: [] },
    { uuid: '3', name: 'Track3', artist: 'Jacks', listens: 0, audio: '', image: 'http://localhost:3001/image/25e457e1-37cf-432d-a780-cd6d4f26519b.jpg', comments: [] },

  ]
  return (
    <Grid container flexDirection="column">
      {tracks.map((track) => (
        <Box p={2} key={track.uuid}>
          <TrackItem track={track} isActive={false} />
        </Box>
      ))}
    </Grid>
  )
}

export default TracksList;