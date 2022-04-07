import { CanActivate, ExecutionContext, UseGuards } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { ROLES } from "../decorators/roles.decorator";

export function CheckRoles()
{
  return UseGuards(RolesGuard)
}

export class RolesGuard implements CanActivate{
  REQUIRED_ROLES:string[]=["mamad"]
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const reflector=new Reflector()
    const roles=reflector.getAllAndOverride<string[]>(ROLES,[
        context.getHandler(),
        context.getClass()
      ])

    const authorizeUser=this.REQUIRED_ROLES.some((role)=>roles.includes(role))
    return authorizeUser
  }

}