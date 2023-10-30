import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageMahasiswaService {

  constructor(private http: HttpClient) { }
  serverUrl = 'http://652fe6976c756603295de6f8.mockapi.io/mahasiswa';

  getMahasiswa() {
    return this.http.get(this.serverUrl);
  }

  postMahasiswa(data: any) {
    return this.http.post(this.serverUrl, data);
  }

  deleteMahasiswa(id: string) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

  putMahasiswa(id: string, data: any) {
    return this.http.put(`${this.serverUrl}/${id}`, data);
  }
}
