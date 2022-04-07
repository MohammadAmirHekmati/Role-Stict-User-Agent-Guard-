import { registerAs } from "@nestjs/config";

export default registerAs("swagger",()=>({
  title:"Guards",
  version:"1.0",
  prefix:"docs",
  tag:"Nestjs Guards",
  description:"Just For Fun"
}))