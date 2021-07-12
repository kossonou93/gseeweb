import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BibliologinComponent } from 'src/app/biblio/bibliologin/bibliologin.component';
import { Bibliotecaire } from 'src/app/model/Bibliotecaire';
import { BibliotecaireService } from 'src/app/services/bibliotecaire.service';

@Component({
  selector: 'app-all-biblio',
  templateUrl: './all-biblio.component.html',
  styles: [
  ]
})
export class AllBiblioComponent implements OnInit {

  public biblios: Bibliotecaire[];
  public deleteBiblio: Bibliotecaire;

  constructor(private bibliotecaireService: BibliotecaireService) { }

  ngOnInit(): void {
    this.getBibliotecaires();
  }

  public getBibliotecaires(): void {
    this.bibliotecaireService.getBibliotecaire().subscribe(
      (response: Bibliotecaire[]) => {
        this.biblios = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteBiblio(bibliotecaireId: number): void {
    this.bibliotecaireService.deleteBibliotecaire(bibliotecaireId).subscribe(
      (response: void) => {
        console.log(response);
        this.getBibliotecaires();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
