import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

private Data : String ='abc';

  constructor() { }
  public getData(){
    return this.Data;
  }
  public setData(databaru){
    this.Data=databaru;
  }
}