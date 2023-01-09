import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

import { useCreateAlbumMutation } from "../../../API/albumsAPI";
import { IAlbumCreateDto } from "../../../types/album";

interface ICreateAlbumControlsProps {
  albumInputData: IAlbumCreateDto;
}

const CreateAlbumControls: React.FC<ICreateAlbumControlsProps> = ({
  albumInputData,
}) => {
  const router = useRouter();

  const [createAlbumRequest] = useCreateAlbumMutation();


  const createAlbum = async () => {
    const formData = new FormData();

    formData.append('name', albumInputData.name);
    formData.append('description', albumInputData.description);
    formData.append('image', albumInputData.image);

    await createAlbumRequest(formData)
      .then(() => router.push('/albums'));
  }
  return (
    <Grid container justifyContent="space-between" px={5} pb={5}>
      <Button onClick={() => router.push('/albums')}>
        Back
      </Button>
      <Button onClick={createAlbum}>
        Create album
      </Button>
    </Grid>
  )
}

export default CreateAlbumControls;
