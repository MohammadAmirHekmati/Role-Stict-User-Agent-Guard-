import { Controller, Get, UseGuards } from "@nestjs/common";
import { AppService } from './app.service';
import { Roles } from "./decorators/roles.decorator";
import { CheckRoles } from "./guards/roles.guard";
import { NoStrict } from "./decorators/no-strict.decorator";
import {  NoStrictCheck } from "./guards/no-strict.guard";
import { CheckUserAgent } from "./guards/user-agent.guard";
import { ResponseOkSerialize } from "./interceptors/response-ok.interceptor";

@ResponseOkSerialize()
@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @CheckRoles()
  @Roles(["user","admin"])
  @Get("roles/guard/test")
  async rolesGuardTest():Promise<any>
  {
    return await this.appService.rolesGuardTest()
  }

  @NoStrict(true)
  @NoStrictCheck()
  @Get("no/strict/test")
  async noStrictTest():Promise<any>
  {
    return this.appService.noStrictTest()
  }

  @CheckUserAgent()
  @Get("user/agent/guard/test")
  async userAgentGuardTest():Promise<any>
  {
    return this.appService.userAgentGuardTest()
  }
}
