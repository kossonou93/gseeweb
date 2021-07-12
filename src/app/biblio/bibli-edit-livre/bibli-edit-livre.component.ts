import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/model/Livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-bibli-edit-livre',
  templateUrl: './bibli-edit-livre.component.html',
  styles: [
  ]
})
export class BibliEditLivreComponent implements OnInit {

  public editLivre: Livre;
  livreForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private livreService: LivreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLivre(this.route.snapshot.params.id);
  }

  public getLivre(id: string): void {
    this.livreService.get(id)
      .subscribe(
        data => {
          this.editLivre = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    
  }

  public updateLivre(livre: Livre): void {
    this.livreService.updateLivre(livre.id, livre).subscribe(
      (response: Livre) => {
        console.log(response);
        alert("Livre modifié avec succès!");
        this.router.navigate(['/biblio-livre-delete']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      } 
    );
  }

}
