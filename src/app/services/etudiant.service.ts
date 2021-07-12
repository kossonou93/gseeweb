import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../model/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getEtudiant(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.baseUrl}/etudiant/getall`);
  }

  public get(id: any): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.baseUrl}/etudiant/getbyid/${id}`);
  }

  public addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.baseUrl}/etudiant/add`, etudiant);
  }

  public updateEtudiant(id: any, etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.baseUrl}/etudiant/update/${id}`, etudiant);
  }

  public deleteEtudiant(etudiantId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/etudiant/delete/${etudiantId}`);
  }
}
