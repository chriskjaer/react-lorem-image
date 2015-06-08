import React, { PropTypes as Type } from 'react';
import { TYPES, generateURL } from './utils';

class LoremImage extends React.Component {
  static propTypes = {
    type: Type.oneOf( TYPES ),
    height: Type.number,
    width: Type.number,
    color: Type.bool,
    mustache: Type.bool
  }

  render() {
    const { type, height, width, color, mustache, ...rest } = this.props;
    const generated = generateURL({ type, height, width, color, mustache });
    return (
      <img
        alt={ generated.type }
        src={ generated.url }
        width={ generated.width }
        height={ generated.height }
        { ...rest }
      />
    );
  }
}

export default LoremImage;
