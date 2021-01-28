import { Component, OnInit } from '@angular/core';
import { SiteApiService } from '../../services/site-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bgImage : string;

  constructor(private siteApi : SiteApiService) { }

  ngOnInit(): void {
    this.bgImage = 'linear-gradient(0deg, black 0%, rgba(0,0,0,0) 11%), url(' + this.siteApi.getImgUrl("img002.jpg") + ')';
  }

}
