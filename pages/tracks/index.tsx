import { Card } from "@mui/material";
import Head from "next/head";

import classes from '../../styles/tracks.module.scss';

import NavBarLayout from "../../components/Layouts/NavBarLayout";
import TracksCardHeader from "../../components/PagesComponents/TracksPage/TracksCard/TracksCardHeader";
import TracksList from "../../components/PagesComponents/TracksPage/TracksCard/TracksList";

function TracksPage() {
  return (
    <>
      <Head>
        <title>Tracks</title>
      </Head>
      <NavBarLayout>
        <Card className={classes.TracksCard}>
          <TracksCardHeader />
          <hr />
          <TracksList />
        </Card>
      </NavBarLayout>
    </>
  )
}

export default TracksPage;
