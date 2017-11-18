import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindisplayComponent } from './components/maindisplay/maindisplay.component';

const appRoutes: Routes =[
  {
    path: '',
    component: MaindisplayComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
