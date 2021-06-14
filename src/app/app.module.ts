import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HTTP} from '@ionic-native/Http/ngx';
import { ResultsPage } from './results/results.page';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    IonicSelectableModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [InAppBrowser,DatePicker,FormBuilder,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, DocumentViewer, ResultsPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
