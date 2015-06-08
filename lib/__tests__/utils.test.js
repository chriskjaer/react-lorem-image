import assert from 'assert';
import fixtures from './fixtures';
import { generateURL } from '../utils';

describe('#generateURL', () => {
  fixtures.map( ({ input, expected, description }) => {
    it(`returns an url of ${ description }`, () => {
      const { url } = generateURL.call(null, input);
      assert.ok( typeof url === 'string');
      assert.equal( url, expected );
    });
  });
});
