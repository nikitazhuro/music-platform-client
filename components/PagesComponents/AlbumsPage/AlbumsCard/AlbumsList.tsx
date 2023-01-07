import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import { useGetAlbumsQuery } from "../../../../API/albumsAPI";
import { IAlbum } from "../../../../types/album";

const AlbumsList: React.FC = () => {
  const router = useRouter();

  const { data = [] } = useGetAlbumsQuery('');

  return (
    <>
      <Box mt={2}>
        <ImageList gap={2} cols={6}>
          {data.map((item: IAlbum) => (
            <ImageListItem key={item.image}>
              <div onClick={() => router.push(`albums/${item.uuid}`)} className="albumItem">
                <Image width={150} height={150} src={'http://localhost:3001/' + item?.image} alt="alt" />
                <ImageListItemBar
                  title={item.name}
                  subtitle={item.description}
                  position="below"
                />
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <style>
        {`
        .albumItem {
          display: flex;
          width: fit-content;
          flex-direction: column;
        }
      `}
      </style>
    </>
  )
}

export default AlbumsList;
