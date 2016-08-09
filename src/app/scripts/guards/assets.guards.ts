'use strict';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AssetsService } from '../services/assets.service';

@Injectable()
export class CanActivateViaAssetsGuard implements CanActivate {

  constructor (
    private assetsService: AssetsService) {

      return this;

  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this
      .assetsService
      .getAssets(state);

  }

};
