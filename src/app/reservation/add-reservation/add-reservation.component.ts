import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/model/Etudiant';
import { Livre } from 'src/app/model/Livre';
import { Reservation } from 'src/app/model/Reservation';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { LivreService } from 'src/app/services/livre.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styles: [
  ]
})
export class AddReservationComponent implements OnInit {

  public livres: Livre[];
  public etudiants: Etudiant[];

  constructor(private livreService: LivreService, private etudiantService: EtudiantService, private reservationService: ReservationService, private router: Router) { }
  
  ngOnInit(): void {
    this.getEtudiants();
    this.getLivres();
  }

  public addReservation(addForm: NgForm) {
    console.log("Value form: ", addForm.value);
    this.reservationService.addReservation(addForm.value).subscribe(
      (response: Reservation) => {
        console.log(response);
        if (response == null) {
          alert("Réservation non éffectuée, Livre indisponible");
          return;
        } else {
          alert("Réservation effectuée avec succès!");
          this.router.navigate(['/etudiant-home']);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getEtudiants(): void {
    this.etudiantService.getEtudiant().subscribe(
      (response: Etudiant[]) => {
        this.etudiants = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getLivres(): void {
    this.livreService.getLivre().subscribe(
      (response: Livre[]) => {
        this.livres = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
