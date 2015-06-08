import assert from 'assert';
import fixtures from './fixtures';
import { generateURL } from '../utils';
import http from 'http';
import https from 'https';
import { parse } from 'url';


describe('#generateURL', () => {
  fixtures.map( ({ input, expected, description }) => {
    it(`returns an url of ${ description }`, () => {
      const { url } = generateURL.call(null, input);
      assert.ok( typeof url === 'string');
      assert.equal( url, expected );
    });
  });
});

const request = { http, https };
describe('services/types', () => {

  fixtures.map( ({ expected, description }) => {
    it(`${ description }, should return a status 200`, function(done) {
      this.timeout(5000);

      const { protocol } = parse(expected);
      request[protocol.replace(':', '')].get(expected, (res) => {
        assert.ok(res.statusCode === 200 || res.statusCode === 301);
        done();
      }).on('error', (e) => {
        throw e.message;
      });

    });
  });
});
