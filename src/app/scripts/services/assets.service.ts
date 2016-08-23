'use strict';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  RouterStateSnapshot
} from '@angular/router';

import {
  ASSETS
} from '../definitions/config';

import { LoadingService } from './loading.service';

let assetService: AssetsService = <AssetsService>null,

  loadingService: LoadingService = <LoadingService>new LoadingService();

@Injectable()
export class AssetsService {

  private assetsLoaded: any = <any>{};

  constructor (
    document: Document) {

      if (!assetService) {

        assetService = this;

      } else {

        return assetService;

      }

      return this;

  }

  public loadAsset (asset: string): Promise<boolean> {

    let img: HTMLElement = <HTMLElement>document.createElement('img'),

      p: Promise<boolean> = <Promise<boolean>>
        new Promise(function (resolve: Function, reject: Function) {

          Object.assign(img, {

            'src': asset,

            onload: function () {

              return resolve(true);

            }

          });

    });

    return p;

  }

  public loadAssets(assets: string[]): Promise<boolean> {

    let loadedAssets: number = <number>0,

      self: AssetsService = <AssetsService>this,

      p: Promise<boolean> = <Promise<boolean>>
        new Promise(function (resolve: Function, reject: Function) {

        assets.forEach(function (asset: string) {

          self
            .loadAsset(asset)
              .then(function(loaded: boolean) {

                if (loaded) {

                  loadedAssets ++;

                }

                if (loadedAssets === assets.length) {

                  return resolve(true);

                }

              });

        });

      });

    return p;

  }

  public getAssets (state: RouterStateSnapshot): Observable<boolean> {

    let observe$: Observable<boolean>;

    loadingService.loading(true);

    observe$ = Observable.create(observer => {

      let route: string = <string>state.url,

        assets: string[] = <string[]>ASSETS[route];

      if (ASSETS[route]) {

        this
          .loadAssets(assets)
            .then(function (loaded: boolean) {

              setTimeout(() => {

                loadingService.loading(false);

                observer.next(loaded);

                return observer.complete();

              }, 500);

            });

      } else {

        console.error('Assets not available for route: ', route);

        loadingService.loading(false);

        observer.next(false);

        observer.complete();

      }

    });

    return observe$;

  }

};
