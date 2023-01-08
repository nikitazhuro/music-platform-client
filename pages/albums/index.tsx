import { Card } from "@mui/material";
import Head from "next/head";

import classes from '../../styles/albumsPage.module.scss';

import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import AlbumsCardHeader from "../../components/PagesComponents/AlbumsPage/AlbumsCard/AlbumsCardHeader";
import AlbumsList from "../../components/PagesComponents/AlbumsPage/AlbumsCard/AlbumsList";

const AlbumsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tracks</title>
      </Head>
      <NavBarWithPlayerLayout>
        <Card className={classes.albumsCardHeader}>
          <AlbumsCardHeader />
          <hr />
          <AlbumsList />
        </Card>
      </NavBarWithPlayerLayout>
    </>
  )
}

export default AlbumsPage;