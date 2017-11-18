import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mobile]'
})
export class MobileMenuDirective {

  constructor() { }

  @HostListener('window:resize') doSomthing() {
    if(window.innerWidth >= 935)
    {
      var d = document.getElementById("menumob");
      var e = document.getElementById("mobilemenu");
      d.classList.remove('is-active');
      e.classList.remove('open');
    }
  }

}
