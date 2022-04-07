export class ResponseOkDto {
  timestamp:number
  data:any
  status:number
}

export class ResponseOk
{
  static setData(data:any):ResponseOkDto
  {
    const responseOkDto=new ResponseOkDto()
    responseOkDto.timestamp=Date.now()
    responseOkDto.status=200
    responseOkDto.data=data
    return responseOkDto
  }
}