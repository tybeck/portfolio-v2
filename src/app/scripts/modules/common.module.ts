'use strict';

import { NgModule } from '@angular/core';

import { ButtonComponent }  from '../components/common/button.component';

import { CommonAnchorSmoothDirective } from '../directives/common/app-anchor.directive';

@NgModule({

  'declarations': [
    ButtonComponent,
    CommonAnchorSmoothDirective
  ],

  'exports': [
    ButtonComponent,
    CommonAnchorSmoothDirective
  ]

})

export class AppCommonModule {

};
