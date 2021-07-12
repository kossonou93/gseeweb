import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Depot } from 'src/app/model/Depot';
import { Etudiant } from 'src/app/model/Etudiant';
import { Livre } from 'src/app/model/Livre';
import { DepotService } from 'src/app/services/depot.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-add-depot',
  templateUrl: './add-depot.component.html',
  styles: [
  ]
})
export class AddDepotComponent implements OnInit {

  public livres: Livre[];
  public etudiants: Etudiant[];

  constructor(private livreService: LivreService, private etudiantService: EtudiantService, private depotService: DepotService, private router: Router) { }
  
  ngOnInit(): void {
    this.getEtudiants();
    this.getLivres();
  }

  public addDepot(addForm: NgForm) {
    console.log("Value form: ", addForm.value);
    this.depotService.addDepot(addForm.value).subscribe(
      (response: Depot) => {
        console.log(response);
        if (response == null ) {
          alert("Dépot non éffectué, Livre déjà disponible");
          return;
        } else {
          alert("Depot effectué avec succès!");
          this.router.navigate(['/biblio-home']);
          
        }
        //alert("Depot effectué avec succès!");
        
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
