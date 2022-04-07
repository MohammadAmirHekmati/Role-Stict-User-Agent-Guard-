import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfig {
  constructor(private configService:ConfigService)
  {}

  get globalPrefix():string
  {
    return this.configService.get<string>("app.globalPrefix")
  }

  get port():string
  {
    return this.configService.get<string>("app.port")
  }
}
