import { Component, OnInit } from '@angular/core';
import { PROFESOR_FAKE } from 'src/app/models/fake.data';
import { Profesor } from 'src/app/models/profesor.interface';



@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})


export class ProfesorListComponent implements OnInit {

  profesoresList: Profesor[] = PROFESOR_FAKE;

  sort(){
    this.profesoresList.sort((a, b) => a.surname.localeCompare(b.surname));

  }

  constructor() { }

  ngOnInit(): void {
  }

}
