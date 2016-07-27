'use strict';

import * as _redis from 'redis';

let client: _redis.RedisClient = _redis.createClient({

  'detect_buffers': true

});

export = client;
