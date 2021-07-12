import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { BibliohomeComponent } from './biblio/bibliohome/bibliohome.component';
import { BibliologinComponent } from './biblio/bibliologin/bibliologin.component';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { AllLivreComponent } from './livre/all-livre/all-livre.component';
import { EditLivreComponent } from './livre/edit-livre/edit-livre.component';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';
import { AllReservationComponent } from './reservation/all-reservation/all-reservation.component';
import { AddDepotComponent } from './depot/add-depot/add-depot.component';
import { AllDepotComponent } from './depot/all-depot/all-depot.component';
import { EditDepotComponent } from './depot/edit-depot/edit-depot.component';
import { AddEtudiantComponent } from './admin/add-etudiant/add-etudiant.component';
import { AllEtudiantComponent } from './admin/all-etudiant/all-etudiant.component';
import { AddBiblioComponent } from './admin/add-biblio/add-biblio.component';
import { AllBiblioComponent } from './admin/all-biblio/all-biblio.component';
import { EditBiblioComponent } from './admin/edit-biblio/edit-biblio.component';
import { EditEtudiantComponent } from './admin/edit-etudiant/edit-etudiant.component';
import { LoginComponent } from './login/login.component';
import { EtudiantHomeComponent } from './etudiant/etudiant-home/etudiant-home.component';
import { EtudiantAllLivreComponent } from './etudiant/all-livre/all-livre.component';
import { DeleteLivreComponent } from './livre/delete-livre/delete-livre.component';
import { BibliDeleteLivreComponent } from './biblio/bibli-delete-livre/bibli-delete-livre.component';
import { BibliAddLivreComponent } from './biblio/bibli-add-livre/bibli-add-livre.component';

const routes: Routes = [
//{path: '', component: AccueilComponent},
{path: '', component: LoginComponent},
{path: 'admin-home', component: AdminhomeComponent},
{path: 'biblio-login', component: BibliologinComponent},
{path: 'livre-add', component: AddLivreComponent},
{path: 'livre-all', component: AllLivreComponent},
{path: 'livre-delete', component: DeleteLivreComponent},
{path: 'livre-edit/:id', component: EditLivreComponent},
{path: 'reservation-add', component: AddReservationComponent},
{path: 'reservation-all', component: AllReservationComponent},
{path: 'reservation-edit/:id', component: EditLivreComponent},
{path: 'depot-add', component: AddDepotComponent},
{path: 'depot-all', component: AllDepotComponent},
{path: 'depot-edit/:id', component: EditDepotComponent},
{path: 'etudiant-add', component: AddEtudiantComponent},
{path: 'etudiant-all', component: AllEtudiantComponent},
{path: 'etudiant-edit/:id', component: EditEtudiantComponent},
{path: 'biblio-add', component: AddBiblioComponent},
{path: 'biblio-all', component: AllBiblioComponent},
{path: 'biblio-livre-delete', component: BibliDeleteLivreComponent},
{path: 'bibli-livre-add', component: BibliAddLivreComponent},
{path: 'biblio-edit/:id', component: EditBiblioComponent},
{path: 'biblio-home', component: BibliohomeComponent},
{path: 'etudiant-home', component: EtudiantHomeComponent},
{path: 'etudiant-livre-all', component: EtudiantAllLivreComponent}



]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [

]
