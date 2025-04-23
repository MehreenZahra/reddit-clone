import { type SchemaTypeDefinition } from "sanity";
import { userType } from "./userType";
import { postType } from "./postType";
import { commentType } from "./commentType";
import { subredditType } from "./subRedditType";
import { voteType } from "./voteType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType, postType, commentType, subredditType, voteType],
};
