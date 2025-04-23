import { type SchemaTypeDefinition } from "sanity";
import { userType } from "./userType";
import { postType } from "./postType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType],
};
