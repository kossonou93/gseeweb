import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-biblio-sidebar',
  templateUrl: './biblio-sidebar.component.html',
  styles: [
  ]
})
export class BiblioSidebarComponent implements OnInit {

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
