import assert from 'assert';
import fixtures from './fixtures';
import { generateURL } from '../utils';

describe('#generateURL', () => {
  fixtures.map( ({ input, expected, description }) => {
    it(`returns an image of ${ description }`, () => {
      assert.equal(
        generateURL.call(null, input).url,
        expected
      );
    });
  });
});
