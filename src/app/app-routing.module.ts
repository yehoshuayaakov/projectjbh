import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './components/coins/coins.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { YourcoinComponent } from './components/yourcoin/yourcoin.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'yourcoin', component: YourcoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
