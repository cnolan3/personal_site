import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteApiService {

  constructor() { }

  getImgUrl(imgName : string): string {
    return environment.apiUrl + '/images/' + imgName;
  }
}
