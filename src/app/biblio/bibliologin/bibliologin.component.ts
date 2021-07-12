import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-bibliologin',
  templateUrl: './bibliologin.component.html',
  styles: [
  ]
})
export class BibliologinComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
 
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }
 
  ngOnInit(): void {
  if (this.tokenStorage.getToken()) {
    this.isLoggedIn = true;
    this.roles = this.tokenStorage.getUser().roles;
  }
}

onSubmit(): void {
  console.log(this.form);
  const { username, password } = this.form;

  this.authService.login(username, password).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}

  reloadPage(): void {
    this.router.navigate(['/biblio-home']);
    //window.location.reload();
  }

}
