import assert from 'assert';
import LoremImage from '../';
import React from 'react/addons';
import fixtures from './fixtures';
import { TYPES } from '../utils';
const { createRenderer } = React.addons.TestUtils;

describe('#LoremImage', () => {
  let shadowRenderer;

  beforeEach(() => {
    shadowRenderer = createRenderer(); // I'm not sure if this if really necessary...
  });

  fixtures.map(({ input, description, expected }) => {
    it(`renders an image component of ${ description }`, () => {
      shadowRenderer.render( <LoremImage { ...input }/> );
      const { type, _store: { props } } = shadowRenderer.getRenderOutput();

      assert.equal( type, 'img', 'Component should be an img tag');
      assert.equal( props.src, expected);
      assert.equal( props.alt, input.type, 'Alt should be the same as type');
      assert.equal( props.width, input.width || input.size );
      assert.equal( props.height, input.height || input.width || input.size );
    });
  });


  it('can generate a random image without any props', () => {
    shadowRenderer.render( <LoremImage /> );
    const { type, _store: { props } } = shadowRenderer.getRenderOutput();

    assert.ok( TYPES.indexOf( props.alt ) !== -1, `${ props.alt } should be one of: ${ TYPES.join(', ') }` );
    assert.ok( props.width === 200, 'Default width should be 200' );
    assert.ok( props.height === 200, 'Default height should be 200' );
  });
});
