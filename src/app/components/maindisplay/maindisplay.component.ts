import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maindisplay',
  templateUrl: './maindisplay.component.html',
  styleUrls: ['./maindisplay.component.css']
})
export class MaindisplayComponent implements OnInit {

  isNight:boolean = false;

  data = new Date();


  constructor() { }

  checkdate(){
    if(this.data.getHours() < 21 && this.data.getHours() > 6){
      this.isNight = false;
    } else {
      this.isNight = true;
    }
  }

  ngOnInit() {
    this.checkdate();
  }

  nightmode(){
    this.isNight = !this.isNight;
  }

}
