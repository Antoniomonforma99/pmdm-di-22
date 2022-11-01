import { Component, OnInit } from '@angular/core';

export interface Alumno {
  name: string;
  surname: string;
  curso: string;
}

const ELEMENT_DATA: Alumno[] = [
  {name: 'Antonio', surname: 'Montero', curso: '2ºDAM'},
  {name: 'Antonio', surname: 'Jimnez', curso: '2ºDAM'},
  {name: 'Antonio', surname: 'Montero', curso: '2ºDAM'},
  {name: 'Antonio', surname: 'Jimnez', curso: '2ºDAM'},
  {name: 'Antonio', surname: 'Montero', curso: '2ºDAM'},
  {name: 'Antonio', surname: 'Jimnez', curso: '2ºDAM'},
  {name: 'Antonio', surname: 'Montero', curso: '2ºDAM'},
  {name: 'Antonio', surname: 'Jimnez', curso: '2ºDAM'},
];

@Component({
  selector: 'app-ej03',
  templateUrl: './ej03.component.html',
  styleUrls: ['./ej03.component.css']
})
export class Ej03Component implements OnInit {

  displayedColumns: string[] = ['shown', 'name', 'surname', 'curso'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
