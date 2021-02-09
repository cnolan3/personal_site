import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-bg',
  templateUrl: './wave-bg.component.html',
  styleUrls: ['./wave-bg.component.scss']
})
export class WaveBgComponent implements OnInit {

  @Input() public height: string;

  constructor() { }

  ngOnInit(): void {
  }

}
