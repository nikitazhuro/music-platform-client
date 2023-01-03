import { IAlbum } from "./album";
import { IComment } from "./comment";

export interface ITrack {
  uuid: string;
  albums?: Array<IAlbum>;
  name: string;
  artist: string;
  listens: number;
  image: string;
  audio: string;
  comments?: Array<IComment>;
}

export interface ITrackDeleteDto {
  trackUUID: string;
  image: string;
  audio: string;
}

export interface ITrackCreateDto {
  name: string;
  artist: string;
}