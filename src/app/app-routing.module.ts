import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsaledisplayComponent } from './sales/appsaledisplay/appsaledisplay.component';
import { MaindisplayComponent } from './maindisplay/maindisplay.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: MaindisplayComponent},
  { path: 'sale', component: AppsaledisplayComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

]; // set path

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppsaledisplayComponent, MaindisplayComponent];
