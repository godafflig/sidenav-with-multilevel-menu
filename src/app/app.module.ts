import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { CaRouleMaPouleComponent } from './project/ca-roule-ma-poule/ca-roule-ma-poule.component';
import { BiggerthanmeComponent } from './project/biggerthanme/biggerthanme.component';
import { CouplefamilleComponent } from './project/couplefamille/couplefamille.component';
import { EasypitchComponent } from './project/easypitch/easypitch.component';
import { MouseFollowerComponent } from './mouse-follower/mouse-follower.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SolfezComponent } from './project/solfez/solfez.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    PagesComponent,
    MediaComponent,
    SublevelMenuComponent,
    CaRouleMaPouleComponent,
    BiggerthanmeComponent,
    CouplefamilleComponent,
    EasypitchComponent,
    MouseFollowerComponent,
    ContactComponent,
    PresentationComponent,
    SolfezComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
