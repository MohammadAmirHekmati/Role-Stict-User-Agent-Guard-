import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  async rolesGuardTest():Promise<any>
  {
    return "Role Guard Tested...!"
  }

  async noStrictTest():Promise<any>
  {
   return "No Strict Guard Tested...!"
  }

  async userAgentGuardTest():Promise<any>
  {
    return "User Agent Guard Tested...!"
  }
}
