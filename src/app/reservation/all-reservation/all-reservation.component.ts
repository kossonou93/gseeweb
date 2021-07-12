import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-all-reservation',
  templateUrl: './all-reservation.component.html',
  styles: [
  ]
})
export class AllReservationComponent implements OnInit {

  public reservations: Reservation[];
  
  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  public getReservations(): void {
    this.reservationService.getReservation().subscribe(
      (response: Reservation[]) => {
        this.reservations = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
