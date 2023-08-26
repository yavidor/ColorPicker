import { Document as mongoDocument, ObjectId } from "mongodb";

type Entity = mongoDocument |
{ _id: ObjectId; first_name: string; last_name: string; color: string };
type Get = { "message": Array<Entity> | String; };
export { Get, Entity };
