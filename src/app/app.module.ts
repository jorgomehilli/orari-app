import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ClassComponent } from './class/class.component';
import { MenaxhoLendetComponent } from './menaxho-lendet/menaxho-lendet.component';
import { OrariProvimeveComponent } from './orari-provimeve/orari-provimeve.component';
import { ImportLendetComponent } from './import-lendet/import-lendet.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClassComponent,
    MenaxhoLendetComponent,
    OrariProvimeveComponent,
    ImportLendetComponent
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
