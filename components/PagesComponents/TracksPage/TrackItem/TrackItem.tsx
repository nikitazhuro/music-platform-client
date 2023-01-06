import { Box, Card, Grid } from "@mui/material"
import { PlayArrow, Pause, Delete } from '@mui/icons-material'
import React from "react";
import { useRouter } from "next/router";

import Avatar from "../../../UI/Avatar/Avatar";
import CustomIconButton from "../../../UI/IconButton/CustomIconButton";
import TrackTitle from "./TrackTitle";

import { ITrack } from "../../../../types/track";
import { useActions } from "../../../../hooks/useActions";
import DeleteTrackWrapper from "./DeleteTrackWrapper";
import TrackDurationProgress from "../../../GlobalComponents/Player/PlayerComponents/TrackProgress/TrackDurationProgress";
import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector";
import { transforTrackDuration } from "../../../../tools/playerTools";
import { getActiveTrackUUID, getPlayerPaused } from "../../../../store/selectors/playerSelectors";
import TrackDuration from "../../../GlobalComponents/Player/PlayerComponents/TrackProgress/TrackDuration";

interface ITrackItemProps {
  track: ITrack;
}

const TrackItem: React.FC<ITrackItemProps> = ({
  track,
}) => {
  const router = useRouter();

  const playerPaused = useTypedSelector(getPlayerPaused);
  const activeTrackUUID = useTypedSelector(getActiveTrackUUID)

  const { setActiveTrack, setPaused } = useActions();

  const isActive = track.uuid === activeTrackUUID;

  const playTrack = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (isActive) {
      setPaused(!playerPaused)
    } else {
      setActiveTrack(track)
    }
  }
  return (
    <Card onClick={() => router.push('/tracks/' + track.uuid)}>
      <Box p={1}>
        <Grid container flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <CustomIconButton onClick={playTrack} size="medium">
              {isActive && !playerPaused
                ? (
                  <Pause />
                )
                : (
                  <PlayArrow />
                )}
            </CustomIconButton>
            <Box mr={2} ml={1}>
              <Avatar src={'http://localhost:3001/' + track.image} width={50} height={50} />
            </Box>
            <TrackTitle trackName={track.name} artist={track.artist} />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              {isActive
                ? (
                  <TrackDurationProgress duration={track.duration} />
                )
                : (
                  <TrackDuration duration={track.duration} />
                )}
            </Box>
            <DeleteTrackWrapper
              trackUUID={track.uuid}
              image={track.image}
              audio={track.audio}
            />
          </Box>
        </Grid>
      </Box>
    </Card >
  )
}

export default TrackItem;