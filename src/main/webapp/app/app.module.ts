import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GymbrainSharedModule } from 'app/shared/shared.module';
import { GymbrainCoreModule } from 'app/core/core.module';
import { GymbrainAppRoutingModule } from './app-routing.module';
import { GymbrainHomeModule } from './home/home.module';
import { GymbrainEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserModule,
    GymbrainSharedModule,
    GymbrainCoreModule,
    GymbrainHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GymbrainEntityModule,
    GymbrainAppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class GymbrainAppModule {}
