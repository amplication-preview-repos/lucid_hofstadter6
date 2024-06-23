import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  thumbnailUrl?: StringNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
