import { Card } from "@mui/material";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import classes from '../../styles/albumsPage.module.scss';

import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import AlbumsHeader from "../../components/PagesComponents/AlbumsPage/AlbumsHeader";
import AlbumsList from "../../components/PagesComponents/AlbumsPage/AlbumsList";

import { wrapper } from "../../store";
import { albumsAPI, getRunningQueriesThunk } from "../../API/albumsAPI";

const AlbumsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Albums</title>
      </Head>
      <NavBarWithPlayerLayout>
        <Card className={classes.albumsCardHeader}>
          <AlbumsHeader />
          <hr />
          <AlbumsList />
        </Card>
      </NavBarWithPlayerLayout>
    </>
  )
}

export default AlbumsPage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async () => {
  try {
    type NextDispatch = ThunkDispatch<AnyAction, AnyAction, AnyAction>;
    const dispatch = store.dispatch as NextDispatch;

    dispatch(albumsAPI.endpoints.getAlbums.initiate(''));

    await Promise.all(dispatch(getRunningQueriesThunk()));

    return { props: {} }
  } catch (error) {
    return { props: {} }
  }
});
