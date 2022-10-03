import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './angular-material-imports/material-imports/material-imports.module';
import { TableComponent } from './components/table/table.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProfesorListComponent } from './components/profesor-list/profesor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SliderComponent,
    ProfesorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
