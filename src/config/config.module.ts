import { Module }from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import swaggerConfig from "../config/swagger/configuration"
import appConfiguration from "../config/app/configuration"
import { SwaggerService } from "./swagger/swagger.service";
import { AppConfig } from "./app/app.service";

@Module({
  imports:[ConfigModule.forRoot({
    load:[swaggerConfig,appConfiguration]
  })],
  providers:[SwaggerService,AppConfig,ConfigService]
})
export class ConfiguartionModule{}