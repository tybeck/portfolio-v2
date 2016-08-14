'use strict';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';

import { CanActivateViaAssetsGuard } from './guards/assets.guards';

import { AppCommonModule } from './modules/common.module';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { PortfolioComponent } from './components/pages/portfolio.component';
import { ClientsComponent } from './components/pages/clients.component';
import { ContactComponent } from './components/pages/contact.component';

import { AssetsService } from './services/assets.service';
import { ROUTING } from './app.routes';

@NgModule({

  'imports': [
    BrowserModule,
    AppCommonModule,
    CommonModule,
    ROUTING
  ],

  'declarations': [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ClientsComponent,
    ContactComponent
  ],

  'providers': [
    {

      'provide': Window,

      'useValue': window

    }, {

      'provide': Document,

      'useValue': document

    },
    AssetsService,
    CanActivateViaAssetsGuard
  ],

  'bootstrap': [
    AppComponent
  ]

})

export class AppModule {

};
