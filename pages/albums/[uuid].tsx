import { Grid } from '@mui/material';
import Head from 'next/head';

import classes from '../../styles/trackPage.module.scss';

import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import GoBackBlock from "../../components/PagesComponents/TrackPage/GoBackBlock";
import AlbumPageContent from '../../components/PagesComponents/AlbumPage/AlbumPageContent';

function TrackPage() {
  return (
    <>
      <Head>
        {/* <title>{`${album?.name}`}</title> */}
      </Head>
      <NavBarWithPlayerLayout>
        <Grid mb={2} className={classes.trackPage}>
          <GoBackBlock path='/albums' />
        </Grid>
        <AlbumPageContent />
      </NavBarWithPlayerLayout>
    </>
  )
}

export default TrackPage;