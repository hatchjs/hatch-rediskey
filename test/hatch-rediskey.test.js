'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/hatch-rediskey.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/hatch-rediskey-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, hatchRediskey')
      .expect(200);
  });
});
