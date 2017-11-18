import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  active = false;
  mobileactive = false;

  hamb() {
    this.active = !this.active;
    this.mobileactive = !this.mobileactive;
  }

}
