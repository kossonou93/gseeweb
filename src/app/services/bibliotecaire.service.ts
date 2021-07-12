import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bibliotecaire } from '../model/Bibliotecaire';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaireService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getBibliotecaire(): Observable<Bibliotecaire[]> {
    return this.http.get<Bibliotecaire[]>(`${this.baseUrl}/bibliotecaire/getall`);
  }

  public get(id: any): Observable<Bibliotecaire> {
    return this.http.get<Bibliotecaire>(`${this.baseUrl}/bibliotecaire/getbyid/${id}`);
  }

  public addBibliotecaire(bibliotecaire: Bibliotecaire): Observable<Bibliotecaire> {
    return this.http.post<Bibliotecaire>(`${this.baseUrl}/bibliotecaire/add`, bibliotecaire);
  }

  public updateBibliotecaire(id: any, bibliotecaire: Bibliotecaire): Observable<Bibliotecaire> {
    return this.http.post<Bibliotecaire>(`${this.baseUrl}/bibliotecaire/update/${id}`, bibliotecaire);
  }

  public deleteBibliotecaire(bibliotecaireId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/bibliotecaire/delete/${bibliotecaireId}`);
  }
}
