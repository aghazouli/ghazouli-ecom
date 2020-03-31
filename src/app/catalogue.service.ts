import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  uploadPhotoProduct(file: File, idProduct): Observable<HttpEvent<{}>> {

    let formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', this.localhost +'/uploadPhoto/'+idProduct, formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return  this.http.request(req);

  }
}
