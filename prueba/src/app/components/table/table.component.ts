import { Component, OnInit } from '@angular/core';

export interface Alumno {
  name: string;
  position: number;
  age: number;
}

const ALUMNO_DATA: Alumno[] = [
  {position: 1, name: 'Antonio Montero', age: 22},
  {position: 2, name: 'Antonio Jimenez', age: 24},
  {position: 3, name: 'Perico el de los palotes', age: 33},
  {position: 4, name: 'Miguel Campos', age: 36}
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'age'];
  dataSource = ALUMNO_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
