import { INestApplication, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

@Injectable()
export class SwaggerService {
  constructor(private configService:ConfigService)
  {}

  get prefix ():string
  {
    return this.configService.get<string>("swagger.prefix")
  }

  get title ():string
  {
    return this.configService.get<string>("swagger.title")
  }

  get description():string
  {
    return this.configService.get<string>("swagger.description")
  }

  get tag():string
  {
    return this.configService.get<string>("swagger.tag")
  }

  get version():string
  {
    return this.configService.get<string>("swagger.version")
  }

  init(app:INestApplication)
  {
    const config = new DocumentBuilder()
      .setTitle(this.title)
      .setDescription(this.description)
      .setVersion(this.version)
      .addTag(this.tag)
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(this.prefix, app, document);
  }
}
