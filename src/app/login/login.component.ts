import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

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
      console.log(data);
      console.log("le role ===> ", data.Data.roles[0]);
      //this.reloadPage();
      switch (data.Data.roles[0]) {
        case "ROLE_ETUDIANT":
          this.router.navigate(['/etudiant-home']);
          break;
        case "ROLE_BIBLIOTHECAIRE":
          this.router.navigate(['/biblio-home']);
          break;
        case "ROLE_ADMIN":
          this.router.navigate(['/admin-home']);
            break;
      
        default:
          this.router.navigate(['/etudiant-home']);
          break;
      }
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}

  reloadPage(): void {
    this.router.navigate(['/admin-home']);
    //window.location.reload();
  }

}
