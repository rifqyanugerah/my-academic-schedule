import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class ManageDosenService {

  constructor(private http: HttpClient) {}

  serverUrl = 'http://652fe6976c756603295de6f8.mockapi.io/dosen';

  getDosen() {
    return this.http.get(this.serverUrl);
  }

  postDosen(data: any) {
    return this.http.post(this.serverUrl, data);
  }

  deleteDosen(id: string) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

  putDosen(id: string, data: any) {
    return this.http.put(`${this.serverUrl}/${id}`, data);
  }
}
