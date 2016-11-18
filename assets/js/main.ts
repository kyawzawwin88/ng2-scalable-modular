/// <reference path="../../tsd/declaration.d.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Logger, Options, Level } from "angular2-logger/core";

import { NgModule } from "@angular/core";
import { App } from './app';
import { AppRouteProvider } from './routes';
import { HttpModule } from '@angular/http';
import { CoreModule } from '../../core-module/core-module';

import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage'

import { EventAggregatorService } from '../../shared-module/services/eventaggregator';

let localStorageServiceConfig = {
    prefix: 'ng2-app',
    storageType: 'localStorage'
};

@NgModule({
    declarations: [ 
      App
    ],
    imports:      [
      BrowserModule,
      HttpModule,
      AppRouteProvider,
      CoreModule.forRoot()
    ],
    bootstrap:    [ App ],
    providers:    [ 
      EventAggregatorService,
      { provide: Options, useValue: { level: 5, store: false } },
      Logger,
      LocalStorageService,
      {
          provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
      }

    ]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);