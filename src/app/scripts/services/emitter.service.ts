'use strict';

import { Injectable } from '@angular/core';

import {
  Subject
} from 'rxjs/Subject';

@Injectable()
export class EventEmitterService extends Subject<any> {

  constructor() {

    super();

  }

  emit(value: any) {

    super.next(value);

  }

};
