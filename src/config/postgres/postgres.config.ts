import { INestApplication, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

@Injectable()
export class PostgresConfig {
  constructor(private configService:ConfigService)
  {}

  get host():string
  {
    return this.configService.get<string>("postgres.host")
  }

  get port():number
  {
    return this.configService.get<number>("postgres.port")
  }

  get username():string
  {
    return this.configService.get<string>("postgres.username")
  }

  get password():string
  {
    return this.configService.get<string>("postgres.password")
  }

  get synchronize():boolean
  {
    return this.configService.get<boolean>("postgres.synchronize")
  }

  get database():string
  {
    return this.configService.get<string>("postgres.database")
  }

  get autoLoaded():boolean
  {
    return this.configService.get<boolean>("postgres.autoLoaded")
  }

  dbInitialize(app:INestApplication)
  {
    const postgresConfiguration:TypeOrmModuleOptions=
      {
        type:"postgres",
        port:this.port,
        host:this.host,
        username:this.username,
        password:this.password,
        database:this.database,
        autoLoadEntities:this.autoLoaded,
        synchronize:this.synchronize
      }
      TypeOrmModule.forRoot(postgresConfiguration)
  }
}