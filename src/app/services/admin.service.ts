import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../model/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public authenticate(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.baseUrl}/admin/signin`, admin);
  }
}
