import { Component, OnInit, HostListener } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
    query,
    group
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
      trigger('expand', [
          state('minimized', style({
              height: '60px',
              width: '60px',
          })),
          state('maximized', style({
              height: '300px',
              width: '70%',
          })),
          transition('minimized => maximized', [
            group([
              animate('1s ease-in-out', keyframes([
                style({ width: '70%', offset: 0.3 }),
                style({ height: '300px', offset: 1.0 })
              ])),
              query(':enter', [
                style({ opacity: '0', height: '0px' }),
                animate('1s', keyframes([
                  style({ opacity: '0', height: '0px', offset: 0.4 }),
                  style({ opacity: '1', height: '100%', offset: 1 })
                ]))
              ])
            ])
          ]),
          transition('maximized => minimized', [
            group([
              animate('1s ease-in-out', keyframes([
                style({ height: '60px', offset: 0.5 }),
                style({ width: '60px', offset: 1.0 }),
              ])),
              query(':leave', [
                animate('1s', keyframes([
                  style({ opacity: '0', offset: 0.5}),
                  style({ opacity: '0', offset: 1})
                ]))
              ])
            ])
          ])
      ]),
  ]
})

export class NavbarComponent implements OnInit {

  constructor() { }
  maximized : boolean = false;

  ngOnInit(): void {
  }
  
  toggle(): void {
      this.maximized = !this.maximized;
  }
}
