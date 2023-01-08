import { Box, Card } from "@mui/material";

import AlbumPageHeader from "./AlbumPageHeader";

import { IAlbum } from "../../../types/album";

interface IAlbumPageContentProps {
  album: IAlbum;
}

const AlbumPageContent: React.FC<IAlbumPageContentProps> = ({
  album,
}) => {
  return (
    <Card>
      <Box p={2}>
        <AlbumPageHeader album={album} />
        <Box my={2}>
          <hr />
        </Box>
      </Box>
    </Card>
  )
}

export default AlbumPageContent;
