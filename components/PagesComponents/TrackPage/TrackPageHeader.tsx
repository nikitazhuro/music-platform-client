import { Grid } from "@mui/material";
import { Box } from "@mui/system";
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
      <Image width={200} height={200} src={track.image} alt="alt" />
      <Box ml={2} display="flex" flexDirection="column">
        <HeaderTitle title={track.name} />
        <Box my={2}>
          <h1>
            Artist - {track.artist}
          </h1>
        </Box>
        <h1>
          Listens - {track.listens}
        </h1>
      </Box>
    </Grid>
  )
}

export default TrackPageHeader;