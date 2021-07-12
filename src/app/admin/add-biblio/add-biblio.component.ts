import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bibliotecaire } from 'src/app/model/Bibliotecaire';
import { BibliotecaireService } from 'src/app/services/bibliotecaire.service';

@Component({
  selector: 'app-add-biblio',
  templateUrl: './add-biblio.component.html',
  styles: [
  ]
})
export class AddBiblioComponent implements OnInit {


  constructor(private bibliotecaireService: BibliotecaireService, private router: Router) { }

  ngOnInit(): void {
  }

  public addBibliotecaire(addForm: NgForm) {
    this.bibliotecaireService.addBibliotecaire(addForm.value).subscribe(
      (response: Bibliotecaire) => {
        console.log(response);
        alert("Bibliotecaire enregistré avec succès!");
        this.router.navigate(['/biblio-all']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
