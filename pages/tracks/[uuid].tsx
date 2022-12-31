import { Card, Grid, Box } from '@mui/material';

import classes from '../../styles/trackPage.module.scss';

import NavBarLayout from "../../components/Layouts/NavBarLayout";
import GoBackBlock from "../../components/PagesComponents/TrackPage/GoBackBlock";
import TrackPageHeader from '../../components/PagesComponents/TrackPage/TrackPageHeader';
import CreateCommentBlock from '../../components/PagesComponents/TrackPage/CreateCommentBlock';

import { ITrack } from '../../types/track';
import { wrapper } from '../../store';
import { tracksAPI, useGetTrackQuery } from '../../API/tracksAPI';
import { useRouter } from 'next/router';

function TrackPage({ data }) {

  return (
    <NavBarLayout>
      <Grid mb={2} className={classes.trackPage}>
        <GoBackBlock />
      </Grid>
      <Card>
        <Box p={3}>
          <TrackPageHeader track={data} />
        </Box>
        <Box p={3}>
          <CreateCommentBlock />
        </Box>
      </Card>
    </NavBarLayout>
  )
}

export default TrackPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  const dispatch = store.dispatch;

  const { data } = await dispatch(tracksAPI.endpoints.getTrack.initiate(params.uuid))

  return {
    props: {
      data,
    }
  };
});