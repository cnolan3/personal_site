import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
      trigger('hide', [
          state('visible', style({
              opacity: 1
          })),
          state('hidden', style({
              opacity: 0.1
          })),
          transition('visible => hidden', [
              animate('0.5s')
          ]),
          transition('hidden => visible', [
              animate('0.5s')
          ]),
      ]),
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }
  faded : boolean = false;

  ngOnInit(): void {
  }

  toggle() {
    this.faded = !this.faded;
    console.log("faded: " + this.faded);
  }

  clickFunction(event) {
      console.log("clicked");
      this.toggle();
  }

}
