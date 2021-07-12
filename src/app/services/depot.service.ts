import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depot } from '../model/Depot';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getDepot(): Observable<Depot[]> {
    return this.http.get<Depot[]>(`${this.baseUrl}/depot/getall`);
  }

  public get(id: any): Observable<Depot> {
    return this.http.get<Depot>(`${this.baseUrl}/depot/getbyid/${id}`);
  }

  public addDepot(depot: Depot): Observable<Depot> {
    return this.http.post<Depot>(`${this.baseUrl}/depot/add`, depot);
  }

  public updateDepot(id: any, depot: Depot): Observable<Depot> {
    return this.http.post<Depot>(`${this.baseUrl}/depot/update/${id}`, depot);
  }

  public deleteDepot(depotId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/depot/delete/${depotId}`);
  }
}
