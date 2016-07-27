import * as _ from 'lodash';

import { proxy } from './proxy';

function getFunctionName(fn: string): string {

  return /function ([^(]*)/.exec(fn + '')[1];

};

export function Prototyping (cls: any, fns: Function[], binding: any): void {

  _.each(fns, function (fn: Function) {

    let name: string = getFunctionName(fn.toString());

    cls.prototype[name] = proxy(fn, binding);

  });

};
