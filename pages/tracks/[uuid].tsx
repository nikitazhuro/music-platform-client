import { Card, Grid, Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import classes from '../../styles/trackPage.module.scss';

import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import GoBackBlock from "../../components/PagesComponents/TrackPage/GoBackBlock";
import TrackPageHeader from '../../components/PagesComponents/TrackPage/TrackPageHeader';
import CreateCommentWrapper from '../../components/PagesComponents/TrackPage/CreateCommentWrapper';
import CommentsBlock from '../../components/PagesComponents/TrackPage/CommentsBlock';

import { ITrack } from '../../types/track';
import { wrapper } from '../../store';
import { tracksAPI } from '../../API/tracksAPI';


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
        <title>{`${track.artist} - ${track.name}`}</title>
      </Head>
      <NavBarWithPlayerLayout>
        <Grid mb={2} className={classes.trackPage}>
          <GoBackBlock path='/tracks' />
        </Grid>
        <Card>
          <Box p={3}>
            <TrackPageHeader track={track} />
          </Box>
          <Box p={3}>
            <CreateCommentWrapper />
          </Box>
          <Box p={3}>
            <CommentsBlock />
          </Box>
        </Card>
      </NavBarWithPlayerLayout>
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