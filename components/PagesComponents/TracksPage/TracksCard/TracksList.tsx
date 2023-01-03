import { Box, Grid } from "@mui/material";

import TrackItem from "./TrackItem/TrackItem";

import { ITrack } from "../../../../types/track";
import { useGetTracksQuery } from "../../../../API/tracksAPI";

function TracksList() {
  const { data = [], isLoading } = useGetTracksQuery('');

  return (
    <Grid container flexDirection="column">
      {!isLoading && data.map((track: ITrack) => (
        <Box p={2} key={track.uuid}>
          <TrackItem track={track} isActive={false} />
        </Box>
      ))}
    </Grid>
  )
}

export default TracksList;