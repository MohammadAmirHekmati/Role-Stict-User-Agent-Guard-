import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfiguartionModule} from "./config/config.module"

@Module({
  imports: [ConfiguartionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
