import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { sokobanComponent } from './project/sokoban/sokoban.component';
import { EasypitchComponent } from './project/easypitch/easypitch.component';
import { CouplefamilleComponent } from './project/couplefamille/couplefamille.component';
import { CaRouleMaPouleComponent } from './project/ca-roule-ma-poule/ca-roule-ma-poule.component';
import { GroupietrackerComponent } from './project/groupietracker/groupietracker.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SolfezComponent } from './project/solfez/solfez.component';

const routes: Routes = [
  {path: '', redirectTo: 'Presentation', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'Passion', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  { path: 'project/sokoban', component: sokobanComponent },
  { path: 'project/Easypitch', component: EasypitchComponent },
  { path: 'project/Couplefamille', component: CouplefamilleComponent },
  { path: 'project/CaRouleMaPoule', component: CaRouleMaPouleComponent },
  { path: 'project/Groupietracker', component: GroupietrackerComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Presentation', component: PresentationComponent },
  { path: 'project/Solfez', component: SolfezComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
