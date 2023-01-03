import { Box, Button } from "@mui/material"
import { MusicNote } from "@mui/icons-material";
import { useRouter } from "next/router";

import classes from '../styles/mainPage.module.scss';

import NavBarWithPlayerLayout from "../components/Layouts/NavBarWithPlayerLayout"

export default function Home() {
  const router = useRouter();

  const goToTracks = () => router.push('/tracks');
  const goToTrackCreate = () => router.push('/tracks/create');

  return (
    <NavBarWithPlayerLayout>
      <Box className={classes.MainPageLayout}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <h1 className={classes.MainPageWelcome}>
            Welcome to music platform
            <Box ml={1} display="flex" justifyContent="center" alignItems="center">
              <MusicNote className={classes.MusicNoteIcon} />
            </Box>
          </h1>
          <Box mt={2} display="flex" >
            <Box mr={2}>
              <Button onClick={goToTracks} variant="outlined">
                Go to tracks
              </Button>
            </Box>
            <Box ml={2}>
              <Button onClick={goToTrackCreate} variant="outlined">
                Load my track
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </NavBarWithPlayerLayout>
  )
}
