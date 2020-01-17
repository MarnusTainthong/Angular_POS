import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './templates/appheader/appheader.component';
import { AppfooterComponent } from './templates/appfooter/appfooter.component';
import { AppsidemenuComponent } from './templates/appsidemenu/appsidemenu.component';
// import { AppsaledisplayComponent } from './sales/appsaledisplay/appsaledisplay.component';
// import { MaindisplayComponent } from './maindisplay/maindisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppsidemenuComponent,
    routingComponents,
    // MaindisplayComponent
    // AppsaledisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
