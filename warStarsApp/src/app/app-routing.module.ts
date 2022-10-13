import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { SpecieListComponent } from './components/specie-list/specie-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path: 'people-list', component: PeopleListComponent},
  {path: 'film-list', component: FilmListComponent},
  {path: 'planet-list', component: PlanetListComponent},
  {path: 'specie-list', component: SpecieListComponent},
  {path: 'starship-list', component: StarshipListComponent},
  {path: 'vehicle-list', component: VehicleListComponent},
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
