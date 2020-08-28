import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarraLateralModule } from './barra-lateral';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarraLateralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
