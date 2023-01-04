import { Box, Card, Grid } from "@mui/material"
import { PlayArrow, Pause, Delete } from '@mui/icons-material'
import React from "react";
import { useRouter } from "next/router";

import Avatar from "../../../../UI/Avatar/Avatar";
import CustomIconButton from "../../../../UI/IconButton/CustomIconButton";
import TrackTitle from "./TrackTitle";

import { ITrack } from "../../../../../types/track";
import { useActions } from "../../../../../hooks/useActions";
import DeleteTrackWrapper from "./DeleteTrackWrapper";
import TrackTimeProgress from "../../../../GlobalComponents/Player/PlayerComponents/TrackTimeProgress";
import { useTypedSelector } from "../../../../../hooks/typedHooks/useTypedSelector";
import { transforTrackDuration } from "../../../../../tools/playerTools";

interface ITrackItemProps {
  track: ITrack;
  isActive: boolean;
}

const TrackItem: React.FC<ITrackItemProps> = ({
  track,
  isActive = false,
}) => {
  const router = useRouter();
  console.log(123);


  const { paused } = useTypedSelector((state) => state.player)
  const { setActiveTrack, setPaused } = useActions();

  const playTrack = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (isActive) {
      setPaused(!paused)
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
              {isActive && !paused
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
                  <TrackTimeProgress duration={track.duration || 0} />
                )
                : (
                  transforTrackDuration(track.duration || 0)
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
