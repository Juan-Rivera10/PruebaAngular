import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const htpOptions = new HttpHeaders().set('Accept', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
url = 'apidata/catalog/distribution';

  constructor(public httpclientecliente: HttpClient) { }

  getitems(): Observable<any>{
    return this.httpclientecliente.get<any>(this.url, {htpOptions});
  }
}

