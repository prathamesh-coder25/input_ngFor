import { Component, OnInit } from '@angular/core';
import { Imobile } from '../models/mobile';
import { mobileProducts } from '../const/mobile';


@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {
mobileArr : Array<Imobile> =[]
  constructor() { }

  ngOnInit(): void {
    
    this.mobileArr = mobileProducts
  }

}
