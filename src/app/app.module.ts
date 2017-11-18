import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'
import { MaindisplayComponent } from './components/maindisplay/maindisplay.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/navigation/logo/logo.component';
import { DesktopComponent } from './components/navigation/desktop/desktop.component';
import { MobileComponent } from './components/navigation/mobile/mobile.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectContentComponent } from './components/project-content/project-content.component';
import { ScrollDirective } from './directives/scroll.directive';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MobileMenuDirective } from './directives/mobile-menu/mobile-menu.directive';
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    AppComponent,
    MaindisplayComponent,
    NavigationComponent,
    LogoComponent,
    DesktopComponent,
    MobileComponent,
    MainHeaderComponent,
    PortfolioComponent,
    ScrollDirective,
    ProjectContentComponent,
    ContactComponent,
    SkillsComponent,
    FooterComponent,
    MobileMenuDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
