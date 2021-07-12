import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/model/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-all-etudiant',
  templateUrl: './all-etudiant.component.html',
  styles: [
  ]
})
export class AllEtudiantComponent implements OnInit {

  public etudiants: Etudiant[];
  public deleteEtudiant: Etudiant;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
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

  public onDeleteEtudiant(etudiantId: number): void {
    this.etudiantService.deleteEtudiant(etudiantId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEtudiants();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
