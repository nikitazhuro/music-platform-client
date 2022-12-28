import { Box, Card, Grid } from "@mui/material"
import { PlayArrow, Pause, Delete } from '@mui/icons-material'
import React from "react";
import { useRouter } from "next/router";

import Avatar from "../../../../UI/Avatar/Avatar";
import CustomIconButton from "../../../../UI/IconButton/CustomIconButton";
import TrackTitle from "./TrackTitle";

import { ITrack } from "../../../../../types/track";

interface ITrackItemProps {
  track: ITrack,
  isActive: boolean
}

const TrackItem: React.FC<ITrackItemProps> = ({
  track,
  isActive = false,
}) => {
  const router = useRouter();

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation()
  };
  return (
    <Card onClick={() => router.push('/tracks/' + track.uuid)}>
      <Box p={1}>
        <Grid container flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <CustomIconButton onClick={stopPropagation} size="medium">
              {isActive
                ? (
                  <Pause />
                )
                : (
                  <PlayArrow />
                )}
            </CustomIconButton>
            <Box mr={2} ml={1}>
              <Avatar src={track.image} width={70} height={70} />
            </Box>
            <TrackTitle trackName={track.name} artist={track.artist} />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              2:33 / 3:20
            </Box>
            <CustomIconButton onClick={stopPropagation} size="medium">
              <Delete />
            </CustomIconButton>
          </Box>
        </Grid>
      </Box>
    </Card >
  )
}

export default TrackItem;
