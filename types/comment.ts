import { ITrack } from "./track";

export interface IComment {
  uuid: string;
  track_uuid: string;
  username: string;
  text: string;
  track?: ITrack;
}