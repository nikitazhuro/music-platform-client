import { Box, Card } from "@mui/material";

import AlbumPageHeader from "./AlbumPageHeader";

import { IAlbum } from "../../../types/album";
import { useGetAlbumQuery } from "../../../API/albumsAPI";
import { useRouter } from "next/router";
import { useActions } from "../../../hooks/useActions";
import { useEffect } from "react";
import TracksList from "../TracksPage/TracksCard/TracksList";
import { ITrack } from "../../../types/track";

interface IAlbumPageContentProps {
  album: IAlbum;
}

const AlbumPageContent: React.FC<IAlbumPageContentProps> = ({
  album,
}) => {
  const router = useRouter();

  const { setDefaultAlbumTracks } = useActions();

  const { data = {} } = useGetAlbumQuery(router.query.uuid as string);

  useEffect(() => {
    const tracksUUID = data.tracks?.map((elem: ITrack) => elem.uuid) || [];

    setDefaultAlbumTracks(tracksUUID);
  }, [data]);

  return (
    <Card>
      <Box p={2}>
        <AlbumPageHeader album={data} />
        <Box my={2}>
          <hr />
        </Box>
        <TracksList customData={data.tracks || []} />
      </Box>
    </Card>
  )
}

export default AlbumPageContent;
