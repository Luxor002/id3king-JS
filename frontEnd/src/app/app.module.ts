import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { MainComponent } from './views/main/main.component';
import { HeaderComponent } from './views/header/header.component';

import { DataTableModule, SharedModule } from 'primeng/primeng';
import * as $ from 'jquery';
import { RouteService } from './views/shared/route.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTableModule,
    SharedModule,
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
