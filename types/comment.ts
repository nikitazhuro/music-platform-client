import { ITrack } from "./track";

export interface IComment {
  uuid: string;
  track_uuid: string;
  username: string;
  text: string;
  track?: ITrack;
}

export interface ICommentDto {
  track_uuid: string;
  username: string;
  text: string;
}