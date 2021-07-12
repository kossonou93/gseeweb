import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/model/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styles: [
  ]
})
export class AddEtudiantComponent implements OnInit {

  constructor(private etudiantService: EtudiantService, private router: Router) { }

  ngOnInit(): void {
  }

  public addEtudiant(addForm: NgForm) {
    this.etudiantService.addEtudiant(addForm.value).subscribe(
      (response: Etudiant) => {
        console.log(response);
        alert("Etudiant enregistré avec succès!");
        this.router.navigate(['/etudiant-all']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
