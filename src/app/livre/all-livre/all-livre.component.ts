import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/Livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-all-livre',
  templateUrl: './all-livre.component.html',
  styles: [
  ]
})
export class AllLivreComponent implements OnInit {

  public livres: Livre[];
  public deleteLivre: Livre;

  constructor(private livreService: LivreService, ) { }

  ngOnInit(): void {
    this.getLivres();
    console.log("les livres ", this.livres);
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

  public onDeleteLivre(livreId: number): void {
    this.livreService.deleteLivre(livreId).subscribe(
      (response: void) => {
        console.log(response);
        this.getLivres();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
