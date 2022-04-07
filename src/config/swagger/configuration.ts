import { registerAs } from "@nestjs/config";

export default registerAs("swagger",()=>({
  title:process.env.SWAGGER_TITLE,
  version:process.env.SWAGGER_VERSION,
  prefix:process.env.SWAGGER_PREFIX,
  tag:process.env.SWAGGER_TAG,
  description:process.env.SWAGGER_DESCRIPTION
}))