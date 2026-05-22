import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RequeteService {

  private baseUrl = 'https://sonelgazservice-demand-management-system-pfe-production.up.railway.app/Api/requetes';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  save(requete: any) {
    return this.http.post<any>(this.baseUrl, requete);
  }

  update(id: number, requete: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, requete);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
