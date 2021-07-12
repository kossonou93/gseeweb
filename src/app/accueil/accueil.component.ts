import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: [
  ]
})
export class AccueilComponent implements OnInit {

  //form: any = {
  //  type: null,
  //};
  Type = ['ETUDIANT', 'BIBLIOTHECAIRE', 'ADMINISTRATEUR']

  //isSuccessful = false;

  constructor(public fb: FormBuilder, private router: Router) { }

  ngForm = this.fb.group({
    typeName: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  onSubmit() {
    //this.isSubmitted = true;
    if (!this.ngForm.valid) {
      return false;
    } else {
      alert(this.ngForm.value.typeName);
      //if (this.ngForm.value.typeName) {
      //  this.router.navigate(['/admin-login']);
      //}
      switch (this.ngForm.value.typeName) {
        case "ETUDIANT":
          this.router.navigate(['/etudiant-login']);
          break;
        case "BIBLIOTHECAIRE":
          this.router.navigate(['/biblio-login']);
          break;
        case "ADMINISTRATEUR":
          this.router.navigate(['/admin-login']);
            break;
      
        default:
          this.router.navigate(['/etudiant-login']);
          break;
      }
    }

  }

  /*onSubmit(): void {
    console.log(this.form);
    const {type} = this.form;
  }*/
}
