import { Box, CircularProgress, Grid } from "@mui/material";

import TrackItem from "../TrackItem/TrackItem";

import { ITrack } from "../../../../types/track";
import { useGetTracksQuery } from "../../../../API/tracksAPI";
import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector";
import { getActiveTrackUUID } from "../../../../store/selectors/playerSelectors";


function TracksList() {
  const { data = [], isLoading } = useGetTracksQuery('');

  return (
    <Grid container flexDirection="column">
      {isLoading
        ? (
          <Box display="flex" justifyContent="center" mt={3}>
            <CircularProgress />
          </Box>)
        : (
          data.map((track: ITrack) => (
            <Box p={2} key={track.uuid}>
              <TrackItem
                track={track}
              />
            </Box>
          ))
        )
      }
    </Grid>
  )
}

export default TracksList;