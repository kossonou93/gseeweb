import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-etudiant-sidebar',
  templateUrl: './etudiant-sidebar.component.html',
  styles: [
  ]
})
export class EtudiantSidebarComponent implements OnInit {

  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      //authorities: this.token.getAuthorities()
    };
    console.log("info ===> ", this.info);
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
