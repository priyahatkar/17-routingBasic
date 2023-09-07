import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ComputerComponent } from './shared/components/computer/computer.component';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { LaptopComponent } from './shared/components/laptop/laptop.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { SingleMoComponent } from './shared/components/mobile/single-mo/single-mo.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SingleCompComponent } from './shared/components/computer/single-comp/single-comp.component';
import { SingleLapComponent } from './shared/components/laptop/single-lap/single-lap.component';
import { SingleTabComponent } from './shared/components/tab/single-tab/single-tab.component';
import { FooterComponent } from './shared/components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashBoardComponent,
    ComputerComponent,
    MobileComponent,
    TabComponent,
    LaptopComponent,
    SingleMoComponent,
    PageNotFoundComponent,
    SingleCompComponent,
    SingleLapComponent,
    SingleTabComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
