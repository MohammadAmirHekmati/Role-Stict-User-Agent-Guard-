import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { ResponseOk } from "../utilities/response-ok.dto";

export interface ClassConstract
{
  new (...args:any[]):{}
}

export function ResponseOkSerialize()
{
  return UseInterceptors(ResponseOkInterceptor)
}

export class ResponseOkInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map((data:any)=>{

        const res=ResponseOk.setData(data)
     return res
    }))
  }

}