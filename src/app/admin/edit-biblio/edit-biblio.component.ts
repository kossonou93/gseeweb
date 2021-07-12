import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bibliotecaire } from 'src/app/model/Bibliotecaire';
import { BibliotecaireService } from 'src/app/services/bibliotecaire.service';

@Component({
  selector: 'app-edit-biblio',
  templateUrl: './edit-biblio.component.html',
  styles: [
  ]
})
export class EditBiblioComponent implements OnInit {

  public editBiblio: Bibliotecaire;
  etudiantForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private bibliotecaireService: BibliotecaireService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBibliotecaire(this.route.snapshot.params.id);
  }

  public getBibliotecaire(id: string): void {
    this.bibliotecaireService.get(id)
      .subscribe(
        data => {
          this.editBiblio = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    
  }

  public updateBiblio(bibliotecaire: Bibliotecaire): void {
    this.bibliotecaireService.updateBibliotecaire(bibliotecaire.id, bibliotecaire).subscribe(
      (response: Bibliotecaire) => {
        console.log(response);
        alert("Bibliotecaire modifié avec succès!");
        this.router.navigate(['/biblio-all']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      } 
    );
  }

}
