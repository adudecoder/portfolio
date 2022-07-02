import { PrimaryPageComponent } from './pages/primary-page/primary-page.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { AboutComponent } from './pages/about/about.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PrimaryPageComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
