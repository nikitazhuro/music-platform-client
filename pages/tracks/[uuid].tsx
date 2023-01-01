import { Card, Grid, Box } from '@mui/material';

import classes from '../../styles/trackPage.module.scss';

import NavBarLayout from "../../components/Layouts/NavBarLayout";
import GoBackBlock from "../../components/PagesComponents/TrackPage/GoBackBlock";
import TrackPageHeader from '../../components/PagesComponents/TrackPage/TrackPageHeader';
import CreateCommentBlock from '../../components/PagesComponents/TrackPage/CreateCommentBlock';

import { ITrack } from '../../types/track';
import { wrapper } from '../../store';
import { tracksAPI } from '../../API/tracksAPI';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import CommentsBlock from '../../components/PagesComponents/TrackPage/CommentsBlock';

interface ITrackPageProps {
  track: ITrack
}

interface ITrackPageQuery {
  uuid?: string;
}

function TrackPage({ track }: ITrackPageProps) {

  return (
    <>
      <Head>
        <title>{`${track.artist}-${track.name}`}</title>
      </Head>
      <NavBarLayout>
        <Grid mb={2} className={classes.trackPage}>
          <GoBackBlock />
        </Grid>
        <Card>
          <Box p={3}>
            <TrackPageHeader track={track} />
          </Box>
          <Box p={3}>
            <CreateCommentBlock trackUUID={track.uuid} />
          </Box>
          <Box p={3}>
            <CommentsBlock />
          </Box>
        </Card>
      </NavBarLayout>
    </>
  )
}

export default TrackPage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  type NextDispatch = ThunkDispatch<AnyAction, AnyAction, AnyAction>
  const {
    uuid,
  } = params as ITrackPageQuery;

  const dispatch = store.dispatch as NextDispatch;

  const { data } = await dispatch(tracksAPI.endpoints.getTrack.initiate(uuid as string))

  return {
    props: {
      track: data,
    }
  };
});