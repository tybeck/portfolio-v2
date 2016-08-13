'use strict';

import { Injectable } from '@angular/core';

import {
  EventEmitterService
} from './emitter.service';

@Injectable()
export class BoolEventEmitterService {

  stream: EventEmitterService;

  constructor () {

    this.stream = new EventEmitterService();

  }

};
