import { Card, Grid, Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import classes from '../../styles/trackPage.module.scss';

import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import GoBackBlock from "../../components/PagesComponents/TrackPage/GoBackBlock";

import { wrapper } from '../../store';
import { IAlbum } from '../../types/album';
import { albumsAPI } from '../../API/albumsAPI';
import AlbumPageContent from '../../components/PagesComponents/AlbumPage/AlbumPageContent';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';


interface IAlbumPageProps {
  album: IAlbum
}

interface IAlbumPageQuery {
  uuid?: string;
}

function TrackPage({ album }: IAlbumPageProps) {
  return (
    <>
      <Head>
        <title>{`${album.name}`}</title>
      </Head>
      <NavBarWithPlayerLayout>
        <Grid mb={2} className={classes.trackPage}>
          <GoBackBlock path='/albums' />
        </Grid>
        <AlbumPageContent album={album} />
      </NavBarWithPlayerLayout>
    </>
  )
}

export default TrackPage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  type NextDispatch = ThunkDispatch<AnyAction, AnyAction, AnyAction>
  const {
    uuid,
  } = params as IAlbumPageQuery;

  const dispatch = store.dispatch as NextDispatch;

  const { data } = await dispatch(albumsAPI.endpoints.getAlbum.initiate(uuid as string))

  return {
    props: {
      album: data,
    }
  };
});