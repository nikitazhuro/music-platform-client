import { ITrack } from "./track";

export interface IAlbum {
  uuid: string;
  name: string;
  picture: string;
  text: string;
  tracks: Array<ITrack>;
}