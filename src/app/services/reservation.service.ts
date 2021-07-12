import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from '../model/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservation/getall`);
  }

  public get(id: any): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/reservation/getbyid/${id}`);
  }

  public addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/reservation/add`, reservation);
  }

  public updateReservation(id: any, reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/reservation/update/${id}`, reservation);
  }

  public deleteReservation(reservationId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/reservation/delete/${reservationId}`);
  }
}
