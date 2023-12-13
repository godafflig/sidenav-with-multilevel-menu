import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { sokobanComponent } from './project/sokoban/sokoban.component';
import { EasypitchComponent } from './project/easypitch/easypitch.component';
import { CouplefamilleComponent } from './project/couplefamille/couplefamille.component';
import { CaRouleMaPouleComponent } from './project/ca-roule-ma-poule/ca-roule-ma-poule.component';
import { BiggerthanmeComponent } from './project/biggerthanme/biggerthanme.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  { path: 'project/sokoban', component: sokobanComponent },
  { path: 'project/Easypitch', component: EasypitchComponent },
  { path: 'project/Couplefamille', component: CouplefamilleComponent },
  { path: 'project/CaRouleMaPoule', component: CaRouleMaPouleComponent },
  { path: 'project/Biggerthanme', component: BiggerthanmeComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
