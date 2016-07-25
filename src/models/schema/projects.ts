'use strict';

import { Schema } from 'mongoose';

let schema: Schema = new Schema({

  'name': String,
  'logoLabel': String,
  'skills': [String],
  'description': String,
  'link': String,
  'backdrop': String,
  'view': String,
  'zoom': String,
  'carousel': String,
  'carouselView': String

});

export = schema;
