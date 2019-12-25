import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private localhost = "http://localhost:8080";

  constructor(private http: HttpClient) {

  }

  public getResource(url){
    return this.http.get(this.localhost + url);
  }
}
