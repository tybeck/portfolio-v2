'use strict';

import * as _redis from 'redis';

let redis: _redis.RedisClient = _redis.createClient({

  'detect_buffers': true

});

export = redis;
