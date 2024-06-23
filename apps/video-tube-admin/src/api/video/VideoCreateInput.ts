import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCreateInput = {
  description?: string | null;
  thumbnailUrl?: string | null;
  title?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
