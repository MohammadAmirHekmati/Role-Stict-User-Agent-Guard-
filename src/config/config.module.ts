import { Module }from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import swaggerConfig from "../config/swagger/configuration"
import appConfiguration from "../config/app/configuration"
import { SwaggerService } from "./swagger/swagger.service";
import { AppConfig } from "./app/app.service";
import { PostgresConfig } from "./postgres/postgres.config";
import postgresConfiguration from "./postgres/configuration"
import { RedisConfig } from "./redis/redis.config";
import redisConfiguration from "./redis/configuration"

@Module({
  imports:[ConfigModule.forRoot({
    load:[swaggerConfig,appConfiguration,postgresConfiguration,redisConfiguration]
  })],
  providers:[SwaggerService,AppConfig,ConfigService,PostgresConfig,RedisConfig]
})
export class ConfiguartionModule{}