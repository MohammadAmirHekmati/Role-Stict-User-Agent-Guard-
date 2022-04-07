import { registerAs } from "@nestjs/config";
import {TypeormTypes} from "../../types/typeorm.types"

export default registerAs("postgres",()=>({
  host:process.env.POSTGRES_HOST,
  port:process.env.POSTGRES_PORT,
  username:process.env.POSTGRES_USERNAME,
  password:process.env.POSTGRES_PASSWORD,
  database:process.env.POSTGRES_DATABASE,
  synchronize:process.env.POSTGRES_SYNCHRONIZE,
  autoLoaded:process.env.POSTGRES_AUTO_LOADED_ENTITIES,
}))