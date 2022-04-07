import { SetMetadata } from "@nestjs/common";

export const ROLES="roles"
export const Roles=(role:string[])=>SetMetadata(ROLES,role)