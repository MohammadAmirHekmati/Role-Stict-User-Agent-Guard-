import { CanActivate, ExecutionContext, UseGuards } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import {NOSTRICT} from "../decorators/no-strict.decorator"

export function NoStrictCheck()
{
  return UseGuards(NoStrictGuard)
}

export class NoStrictGuard implements CanActivate{
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const reflector=new Reflector()
    const noStrict=reflector.get<boolean>(NOSTRICT,context.getHandler())

    return noStrict
  }

}