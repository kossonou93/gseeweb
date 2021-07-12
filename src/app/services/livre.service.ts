import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livre } from '../model/Livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getLivre(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.baseUrl}/livre/getall`);
  }

  public get(id: any): Observable<Livre> {
    return this.http.get<Livre>(`${this.baseUrl}/livre/getbyid/${id}`);
  }

  public addLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(`${this.baseUrl}/livre/add`, livre);
  }

  public updateLivre(id: any, livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(`${this.baseUrl}/livre/update/${id}`, livre);
  }

  public deleteLivre(livreId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/livre/delete/${livreId}`);
  }

}
