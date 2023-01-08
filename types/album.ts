import { ITrack } from "./track";

export interface IAlbum {
  uuid: string;
  name: string;
  image: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  tracks?: Array<ITrack>;
}

export interface IAlbumCreateDto {
  name: string;
  description: string;
  image: string;
}

export interface IAlbumDeleteDto {
  uuid: string;
  image: string;
}

export interface IAlbumUpdateTrack {
  trackList: Array<string | void>;
  albumUUID: string;
}