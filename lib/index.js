import React, { PropTypes as Type } from 'react';
import { TYPES, generateURL } from './utils';

class LoremImage extends React.Component {
  static propTypes = {
    type: Type.oneOf( TYPES ),
    height: Type.number,
    width: Type.number,
    color: Type.bool,
    mustache: Type.bool,
    crazy: Type.bool
  }

  render() {
    const generated = generateURL( this.props );
    return (
      <img
        { ...this.props }
        alt={ generated.type }
        src={ generated.url }
        width={ generated.width }
        height={ generated.height }
      />
    );
  }
}

export default LoremImage;
