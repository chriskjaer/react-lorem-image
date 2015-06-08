# Lorem Image [![Build Status](https://travis-ci.org/chriskjaer/react-lorem-image.svg)](https://travis-ci.org/chriskjaer/react-lorem-image) [![npm version](https://badge.fury.io/js/react-lorem-image.svg)](http://badge.fury.io/js/react-lorem-image)

<img src="http://mustachify.me/?src=http://www.fillmurray.com/300/300"
align='left' width="200" height="200" hspace="12" alt="Fill Murray"/>

Placeholder images for your React prototypes.

Implemented services:
- http://www.nicenicejpg.com/
- http://www.fillmurray.com/
- https://placekitten.com/

...and, to top it all of, you have to option to: http://mustachify.me/ !


# Usage

```javascript
import LoremImage from 'react-lorem-image';

class Demo extends React.Component {
  render() {
    return (
      <LoremImage type='murray' mustache={ true } width={ 300 } height={ 300 } />
    );
  }
}
```


#Component API

```javascript
<LoremImage
  type={ string }       // One of (See implemented services below.)
  width={ ?number }     // Optional - Defaults to 200
  height={ ?number }    // Optional - Defaults to width
  mustache={ ?bool }    // Optional - Defaults to false
  color={ ?bool }       // Optional - Defaults to true. Not all services
                        //            have color.
/>
```

Services / Types allowed:
  - vanilla - Nice Nice Jpg / Vanilla Ice.
  - kitten - Placekitten
  - murray - Fill Murray / Bill Murray
