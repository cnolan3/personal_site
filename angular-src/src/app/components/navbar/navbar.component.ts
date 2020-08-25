import { Component, OnInit, HostListener } from '@angular/core';
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
              opacity: 1,
              height: '4pc'
          })),
          state('hidden', style({
              opacity: 0.1,
              height: '3pc'
          })),
          transition('visible <=> hidden', [
              animate('0.3s')
          ])
      ]),
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }
  faded : boolean = false;

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScroll($event) {
      if (window.pageYOffset > 200) {
          this.faded = true;
      }
      else {
          this.faded = false;
      }
  }
}
