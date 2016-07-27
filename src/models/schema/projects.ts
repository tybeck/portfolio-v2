'use strict';

import { Schema } from 'mongoose';

export const SCHEMA = new Schema({

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
