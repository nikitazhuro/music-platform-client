import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import AddTracksModal from "./AddTracksModal";
import HeaderTitle from "../../UI/Title/HeaderTitle";

import { IAlbum } from "../../../types/album";

interface IAlbumPageHeaderProps {
  album: IAlbum;
}

const AlbumPageHeader: React.FC<IAlbumPageHeaderProps> = ({
  album,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  }

  return (
    <Box display="flex">
      <Box mr={2}>
        {album.image && (
          <Image alt="Image" width={150} height={150} src={'http://localhost:3001/' + album.image} />
        )}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="start" justifyContent="space-between">
        <Box>
          <HeaderTitle title={album.name} />
          <Box>
            {album.description}
          </Box>
        </Box>
        <Box>
          <Box>
            Created - {new Date(album.createdAt).toLocaleString()}
          </Box>
        </Box>
        <Button variant="outlined" onClick={handleOpen}>
          Добавить / удалить треки
        </Button>
      </Box>
      <AddTracksModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Box>
  )
}

export default AlbumPageHeader;
