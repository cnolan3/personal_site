import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
    query,
    group,
    stagger
} from '@angular/animations';
import { viewClassName } from '@angular/compiler';
import { faCode, faCodeBranch, faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fade', [
      
        transition(':enter', [
          query('.nav-item', [
            style({ opacity: '0', transform: 'translateX(-30px)' }),
            stagger('0.2s', [
              animate('0.3s ease-out', style({ opacity: '1.0', transform: 'none' }))
            ])
          ])
            
        ]),
        transition(':leave', [
          style({ opacity: '1.0', transform: 'none' }),
          animate('0.05s', style({ opacity: '0', transform: 'translateX(-30px)' }))
        ])
        
    ])
  ]
})

export class NavbarComponent implements OnInit {

  constructor() { }
  maximized : boolean = false;
  highlighted : boolean = false;
  pressed : boolean = false;
  @ViewChild("burgerIcon") burger;
  @ViewChild("dot") dot;

  faCode = faCode;
  faCodeBranch = faCodeBranch;
  faHome = faHome;
  faBookOpen = faBookOpen;

  ngOnInit(): void {
  }
  
  toggle(): void {
      this.maximized = !this.maximized;

      if (this.maximized)
      {
        this.burger.nativeElement.classList.remove("pressedBack");
        this.burger.nativeElement.classList.add("pressedForward");

        this.dot.nativeElement.classList.add("expand");
      }
      else
      {
        this.burger.nativeElement.classList.remove("pressedForward")
        this.burger.nativeElement.classList.add("pressedBack");

        this.dot.nativeElement.classList.remove("expand");
      }
  }
}
