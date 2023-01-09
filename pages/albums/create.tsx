import { Card, Grid } from "@mui/material";
import React, { useState } from 'react';

import classes from '../../styles/albumCreatePage.module.scss';

import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import CreateAlbumForm from "../../components/PagesComponents/CreateAlbumPage/CreateAlbumForm";
import CreateAlbumControls from "../../components/PagesComponents/CreateAlbumPage/CreateAlbumControls";

import { IAlbumCreateDto } from "../../types/album";

function TrackCreatePage() {
  const [albumInputData, setAlbumInputData] = useState<IAlbumCreateDto>({
    name: '',
    description: '',
    image: '',
  })

  return (
    <NavBarWithPlayerLayout>
      <Grid className={classes.albumCreatePage}>
        <Card className={classes.mainCard}>
          <CreateAlbumForm albumInputData={albumInputData} setAlbumInputData={setAlbumInputData} />
          <CreateAlbumControls albumInputData={albumInputData} />
        </Card>
      </Grid>
    </NavBarWithPlayerLayout>
  )
}

export default TrackCreatePage;