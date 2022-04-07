import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerService } from "./config/swagger/swagger.service";
import { AppController } from "./app.controller";
import { AppConfig } from "./config/app/app.service";
import { PostgresConfig } from "./config/postgres/postgres.config";
import { RedisConfig } from "./config/redis/redis.config";

async function bootstrap() {
  // Create Nest js Appication
  const app = await NestFactory.create(AppModule);

  // Initialize Postgres Database
  const postgresConfig=app.get<PostgresConfig>(PostgresConfig)
  postgresConfig.dbInitialize(app)

  //Initialize Redis DB
  const redisConfig=app.get<RedisConfig>(RedisConfig)
  redisConfig.redisInitialize(app)

  //Initialize Swagger
  const swaggerConfig=app.get<SwaggerService>(SwaggerService)
  swaggerConfig.init(app)

  // Get Some app configuration
  const appConfig=app.get<AppConfig>(AppConfig)
  await app.listen(appConfig.port);
}
bootstrap();
