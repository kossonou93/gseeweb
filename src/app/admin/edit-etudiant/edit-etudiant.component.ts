import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/model/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styles: [
  ]
})
export class EditEtudiantComponent implements OnInit {

  public editEtudiant: Etudiant;
  etudiantForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private etudiantService: EtudiantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEtudiant(this.route.snapshot.params.id);
  }

  public getEtudiant(id: string): void {
    this.etudiantService.get(id)
      .subscribe(
        data => {
          this.editEtudiant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    
  }

  public updateEtudiant(etudiant: Etudiant): void {
    this.etudiantService.updateEtudiant(etudiant.id, etudiant).subscribe(
      (response: Etudiant) => {
        console.log(response);
        alert("Etudiant modifié avec succès!");
        this.router.navigate(['/etudiant-all']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      } 
    );
  }

}
