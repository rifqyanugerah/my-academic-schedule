import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class ApiService {
  serverUrl = 'https://652fe6976c756603295de6f8.mockapi.io/dosen';
  constructor(
    public http: HttpClient
  ) { }

  // Database Dosen API
  // GET
  getCodedosen() {
    return this.http.get(this.serverUrl);
  }

  getDosen() {
    return this.http.get(this.serverUrl);
  }

  getNip() {
    return this.http.get(this.serverUrl);
  }

  // POST
  postCodedosen(data: any) {
    return this.http.post(this.serverUrl, data);
  }

  postDosen(data: any) {
    return this.http.post(this.serverUrl, data);
  }

  postNip(data: any) {
    return this.http.post(this.serverUrl, data);
  }
}
