import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { SpecieListComponent } from './components/specie-list/specie-list.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    StarshipListComponent,
    SpecieListComponent,
    VehicleListComponent,
    StarshipListComponent,
    WelcomeComponent,
    NavbarComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
