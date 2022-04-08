import { CanActivate, ExecutionContext, UseGuards } from "@nestjs/common";
import { Observable } from "rxjs";
import {Request} from "express"
import { UserAgnetInterface } from "../interfaces/user-agent.interface";
const parser=require("ua-parser-js")

export function CheckUserAgent()
{
  return UseGuards(UserAgentGuard)
}

export class UserAgentGuard implements CanActivate{
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req:Request=context.switchToHttp().getRequest()
      const userAgent:UserAgnetInterface=parser(req.get("user-agent"))
      const userAgentBrowser=userAgent.browser
      const userAgentName=userAgentBrowser.name.toLowerCase()
    console.log(userAgentName);
        return  userAgentName.includes("chrome")
  }

}