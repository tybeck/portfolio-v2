'use strict';

export function proxy(fn: Function, it: any): Function {

  return function (...args: any[]) {

    return fn.apply(it, args);

  };

};
