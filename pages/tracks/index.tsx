import { Card } from "@mui/material";
import Head from "next/head";

import classes from '../../styles/tracks.module.scss';

import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import TracksCardHeader from "../../components/PagesComponents/TracksPage/TracksCard/TracksCardHeader";
import TracksList from "../../components/PagesComponents/TracksPage/TracksCard/TracksList";


function TracksPage() {
  return (
    <>
      <Head>
        <title>Tracks</title>
      </Head>
      <NavBarWithPlayerLayout>
        <Card className={classes.TracksCard}>
          <TracksCardHeader />
          <hr />
          <TracksList />
        </Card>
      </NavBarWithPlayerLayout>
    </>
  )
}

export default TracksPage;