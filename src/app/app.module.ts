import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoinsComponent } from './components/coins/coins.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { YourcoinComponent } from './components/yourcoin/yourcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoinsComponent,
    HomeComponent,
  
    AboutComponent,
  
    YourcoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
