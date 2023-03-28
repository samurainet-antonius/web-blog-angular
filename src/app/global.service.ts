import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export enum GlobalServiceType {
  NEWS_LIST,
  NEWS_ADD,
  NEWS_UPDATE,
  NEWS_DELETE
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private BASE_URL:string = ''
  constructor(private http: HttpClient) {
    this.BASE_URL = 'http://localhost:8000'
  }

  getUrl (globalType: GlobalServiceType){
    let url:string;
    switch (globalType) {
      case GlobalServiceType.NEWS_LIST:
        url = '/news'
        break;
      case GlobalServiceType.NEWS_ADD:
        url = '/news/create'
        break;
      case GlobalServiceType.NEWS_UPDATE:
        url = '/news/update/:id'
        break;
      case GlobalServiceType.NEWS_DELETE:
        url = '/news/:id'
        break;
      default:
        url = '/news'
        break;
    }

    return url
  }

  get (globalType: GlobalServiceType, params:string='') {
    return this.http.get(this.BASE_URL+this.getUrl(globalType)+params)
  }
}
