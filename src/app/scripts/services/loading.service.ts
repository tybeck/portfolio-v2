'use strict';

import {
  Injectable,
  EventEmitter
} from '@angular/core';

let loadingService: LoadingService = <LoadingService>null;

@Injectable()
export class LoadingService {

  public _loading: boolean = <boolean>false;

  public isLoadingChanged: EventEmitter<boolean>;

  constructor () {

    if (!loadingService) {

      loadingService = this;

      this.isLoadingChanged = new EventEmitter<boolean>();

    } else {

      return loadingService;

    }

    return this;

  }

  loading (loading: boolean) {

    this._loading = loading;

    this.isLoadingChanged.emit(loading);

  }

};
