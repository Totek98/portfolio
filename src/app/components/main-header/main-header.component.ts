import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let options = {
      strings: ["Adrian ^1000 Karczewski"],
      typeSpeed: 200,
      showCursor: false
    }

    let typed = new Typed(".typed", options);
    let options2 = {
      strings: ["Junior Full Stack Developer"],
      typeSpeed: 200,
      showCursor: false
    }

    let typed2 = new Typed(".proff", options2);
  }

}
