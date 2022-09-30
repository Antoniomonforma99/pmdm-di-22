import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isShown = false;
  show = "Show password";
  hide = "Hide password";

  constructor() { }

  ngOnInit(): void {
  }

  alterPassword() {
    this.isShown = !this.isShown;
  }

}
