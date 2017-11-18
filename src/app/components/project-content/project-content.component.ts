import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {

  @Input() isDarkTheme:boolean;

  constructor() { }

  ngOnInit() {
  }

}
