import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
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
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
      trigger('expand', [
          state('minimized', style({
              height: '70px',
              width: '70px',
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
                  style({ opacity: '0', height: '0px', offset: 0.6 }),
                  style({ opacity: '1', height: '100%', offset: 1 })
                ]))
              ])
            ])
          ]),
          transition('maximized => minimized', [
            group([
              animate('1s ease-in-out', keyframes([
                style({ height: '70px', offset: 0.5 }),
                style({ width: '70px', offset: 1.0 }),
              ])),
              query(':leave', [
                animate('1s', keyframes([
                  style({ opacity: '0', offset: 0.2 }),
                  style({ opacity: '0', offset: 1 })
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
  @ViewChild("menubutton") menuButton;

  ngOnInit(): void {
  }
  
  toggle(): void {
      this.maximized = !this.maximized;

      if (this.maximized)
      {
        this.menuButton.nativeElement.classList.add("is-active");
      }
      else
      {
        this.menuButton.nativeElement.classList.remove("is-active");
      }
  }
}
