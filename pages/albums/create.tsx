import { Card, Grid } from "@mui/material";
import React, { useState } from 'react';
import { useRouter } from "next/router";

import classes from '../../styles/trackCreatePage.module.scss';

import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";

import { useCreateTrackMutation } from "../../API/tracksAPI";
import { IAlbumCreateDto } from "../../types/album";

function TrackCreatePage() {
  const router = useRouter();

  const [createTrackRequest] = useCreateTrackMutation();

  const [trackInputData, setTrackInputData] = useState<IAlbumCreateDto>({
    name: '',
    description: '',
    image: '',
  })

  const createTrack = async () => {
    const formData = new FormData();

    formData.append('name', trackInputData.name);
    formData.append('description', trackInputData.description);
    formData.append('image', trackInputData.image);

    await createTrackRequest(formData)
      .then(() => router.push('/tracks'));
  }

  return (
    <NavBarWithPlayerLayout>
      <Grid className={classes.trackCreatePage}>
        awdawdawd
      </Grid>
    </NavBarWithPlayerLayout>
  )
}

export default TrackCreatePage;