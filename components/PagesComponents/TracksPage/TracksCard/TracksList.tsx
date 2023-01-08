import { Box, CircularProgress, Grid } from "@mui/material";

import TrackItem from "../TrackItem/TrackItem";

import { ITrack } from "../../../../types/track";
import { useGetTracksQuery } from "../../../../API/tracksAPI";

interface ITrackListProps {
  customData?: Array<ITrack>
  disabledEvents?: Array<string>;
  hiddenElements?: Array<string>;
}

const TracksList: React.FC<ITrackListProps> = ({
  customData,
  disabledEvents = [],
  hiddenElements = [],
}) => {
  const { data = [], isLoading } = useGetTracksQuery('');

  return (
    <Grid container flexDirection="column">
      {isLoading
        ? (
          <Box display="flex" justifyContent="center" mt={3}>
            <CircularProgress />
          </Box>)
        : (
          (customData || data).map((track: ITrack) => (
            <Box p={2} key={track.uuid}>
              <TrackItem
                disabledEvents={disabledEvents}
                hiddenElements={hiddenElements}
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