import { INestApplication, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { RedisModule, RedisModuleOptions } from "nestjs-redis";

@Injectable()
export class RedisConfig {
  constructor(private configService:ConfigService)
  {}

  get host():string
  {
    return this.configService.get<string>("redis.host")
  }

  get port():number
  {
    return this.configService.get<number>("redis.port")
  }

  redisInitialize(app:INestApplication)
  {
    const redisConfig:RedisModuleOptions=
      {
        host:this.host,
        port:this.port
      }

      RedisModule.register(redisConfig)
  }
}