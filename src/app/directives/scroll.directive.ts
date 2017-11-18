import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostListener('window:scroll') doSomthing() {
    if (window.pageYOffset > 90) {
      var d = document.getElementById("scrolls");
      d.classList.add("color");
    } else if(window.pageYOffset < 90){
      var d = document.getElementById("scrolls");
      d.classList.remove("color");
    }
  }

}
