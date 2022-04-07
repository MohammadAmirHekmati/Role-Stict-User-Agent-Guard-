import { SetMetadata } from "@nestjs/common";

export const NOSTRICT="noStrict"
export const NoStrict=(value:boolean)=>SetMetadata(NOSTRICT,value)