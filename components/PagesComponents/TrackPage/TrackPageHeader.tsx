import { Grid, Box } from "@mui/material";
import Image from "next/image";

import { ITrack } from "../../../types/track";
import HeaderTitle from "../../UI/Title/HeaderTitle";

interface ITrackPageHeader {
  track: ITrack;
}

const TrackPageHeader: React.FC<ITrackPageHeader> = ({
  track,
}) => {
  return (
    <Grid container alignItems="center">
      {track?.image && (
        <Image width={200} height={200} src={'http://localhost:3001/' + track?.image} alt="alt" />
      )}
      <Box ml={2} display="flex" flexDirection="column">
        <HeaderTitle title={track?.name} />
        <Box my={2}>
          <HeaderTitle title={track?.artist} />
        </Box>
        <HeaderTitle title={`Listens - ${track?.listens}`} />
      </Box>
    </Grid>
  )
}

export default TrackPageHeader;