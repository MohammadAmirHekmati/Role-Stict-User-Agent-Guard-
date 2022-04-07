import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerService } from "./config/swagger/swagger.service";
import { AppController } from "./app.controller";
import { AppConfig } from "./config/app/app.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig=app.get<SwaggerService>(SwaggerService)
  swaggerConfig.init(app)
  const appConfig=app.get<AppConfig>(AppConfig)

  await app.listen(appConfig.port);
}
bootstrap();
