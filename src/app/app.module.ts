import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { BibliohomeComponent } from './biblio/bibliohome/bibliohome.component';
import { BibliologinComponent } from './biblio/bibliologin/bibliologin.component';
import { AdminHearderComponent } from './admin/admin-hearder/admin-hearder.component';
import { AllLivreComponent } from './livre/all-livre/all-livre.component';
import { EditLivreComponent } from './livre/edit-livre/edit-livre.component';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';
import { AllReservationComponent } from './reservation/all-reservation/all-reservation.component';
import { EditReservationComponent } from './reservation/edit-reservation/edit-reservation.component';
import { EditDepotComponent } from './depot/edit-depot/edit-depot.component';
import { AddDepotComponent } from './depot/add-depot/add-depot.component';
import { AllDepotComponent } from './depot/all-depot/all-depot.component';
import { AllEtudiantComponent } from './admin/all-etudiant/all-etudiant.component';
import { EditEtudiantComponent } from './admin/edit-etudiant/edit-etudiant.component';
import { AddEtudiantComponent } from './admin/add-etudiant/add-etudiant.component';
import { AddBiblioComponent } from './admin/add-biblio/add-biblio.component';
import { AllBiblioComponent } from './admin/all-biblio/all-biblio.component';
import { EditBiblioComponent } from './admin/edit-biblio/edit-biblio.component';
import { BiblioSidebarComponent } from './biblio/biblio-sidebar/biblio-sidebar.component';
import { BiblioHearderComponent } from './biblio/biblio-hearder/biblio-hearder.component';
import { EtudiantHearderComponent } from './etudiant/etudiant-hearder/etudiant-hearder.component';
import { EtudiantSidebarComponent } from './etudiant/etudiant-sidebar/etudiant-sidebar.component';
import { LoginComponent } from './login/login.component';
import { EtudiantHomeComponent } from './etudiant/etudiant-home/etudiant-home.component';
import { EtudiantAllLivreComponent } from './etudiant/all-livre/all-livre.component';
import { DeleteLivreComponent } from './livre/delete-livre/delete-livre.component';
import { BibliDeleteLivreComponent } from './biblio/bibli-delete-livre/bibli-delete-livre.component';
import { BibliAddLivreComponent } from './biblio/bibli-add-livre/bibli-add-livre.component';
import { BibliEditLivreComponent } from './biblio/bibli-edit-livre/bibli-edit-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminSidebarComponent,
    AdminHearderComponent,
    BibliohomeComponent,
    BibliologinComponent,
    AllLivreComponent,
    EditLivreComponent,
    AddLivreComponent,
    AddReservationComponent,
    AllReservationComponent,
    EditReservationComponent,
    EditDepotComponent,
    AddDepotComponent,
    AllDepotComponent,
    AllEtudiantComponent,
    EditEtudiantComponent,
    AddEtudiantComponent,
    AddBiblioComponent,
    AllBiblioComponent,
    EditBiblioComponent,
    BiblioSidebarComponent,
    BiblioHearderComponent,
    EtudiantHearderComponent,
    EtudiantSidebarComponent,
    LoginComponent,
    EtudiantHomeComponent,
    EtudiantAllLivreComponent,
    DeleteLivreComponent,
    BibliDeleteLivreComponent,
    BibliAddLivreComponent,
    BibliEditLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
