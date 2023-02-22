import { PrimengModule } from './primeng.module';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion'; // accordion and accordion tab
import { MenuItem } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    TabViewModule,
    AccordionModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [  DatePipe,
  ConfirmationService,
MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
