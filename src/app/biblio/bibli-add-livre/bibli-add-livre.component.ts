import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Livre } from 'src/app/model/Livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-bibli-add-livre',
  templateUrl: './bibli-add-livre.component.html',
  styles: [
  ]
})
export class BibliAddLivreComponent implements OnInit {

  constructor(private livreService: LivreService, private router: Router) { }

  ngOnInit(): void {
  }

  public addLivre(addForm: NgForm) {
    this.livreService.addLivre(addForm.value).subscribe(
      (response: Livre) => {
        console.log(response);
        alert("Livre enregistré avec succès!");
        this.router.navigate(['/biblio-livre-delete']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
