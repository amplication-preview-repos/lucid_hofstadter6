import { User } from "../user/User";

export type Video = {
  createdAt: Date;
  description: string | null;
  id: string;
  thumbnailUrl: string | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
};
