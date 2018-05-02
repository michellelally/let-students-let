import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/*
  Generated class for the AreasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AreasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AreasProvider Provider');
  }

  getAreasData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/17f5b87c-4e11-11e8-ad5f-2be54551b601');
  }

}
