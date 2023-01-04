import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import TrackItem from "./TrackItem/TrackItem";

import { ITrack } from "../../../../types/track";
import { useGetTracksQuery } from "../../../../API/tracksAPI";
import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector";
import { getActiveTrackUUID } from "../../../../store/selectors/playerSelectors";


function TracksList() {
  const { data = [], isLoading } = useGetTracksQuery('');

  const [tracks, setTracks] = useState<Array<never | ITrack>>([]);

  const activeTrackUUID = useTypedSelector(getActiveTrackUUID)

  useEffect(() => {
    data.forEach((track: ITrack) => {
      const audio = new Audio();

      audio.src = 'http://localhost:3001/' + track.audio;

      audio.onloadedmetadata = () => {
        const newTrack = {
          ...track,
          duration: audio.duration,
        } as ITrack;

        setTracks((prev) => ([...prev, newTrack]))
      }
    })
  }, [data])

  return (
    <Grid container flexDirection="column">
      {!isLoading && tracks.map((track: ITrack) => (
        <Box p={2} key={track.uuid}>
          <TrackItem
            track={track}
            isActive={activeTrackUUID ? track.uuid === activeTrackUUID : false}
          />
        </Box>
      ))}
    </Grid>
  )
}

export default TracksList;