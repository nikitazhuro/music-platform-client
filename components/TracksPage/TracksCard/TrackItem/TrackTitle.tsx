import { Grid } from "@mui/material";
import { Box } from "@mui/system";

interface ITrackTitle {
  trackName: string;
  artist: string;
}

const TrackTitle: React.FC<ITrackTitle> = ({
  trackName,
  artist,
}) => {
  return (
    <Box>
      <Grid container flexDirection="column">
        <h3>
          {trackName}
        </h3>
        <p>
          {artist}
        </p>
      </Grid>
    </Box>
  )
}

export default TrackTitle;
