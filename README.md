# Lorem Image [![Build Status](https://travis-ci.org/chriskjaer/react-lorem-image.svg)](https://travis-ci.org/chriskjaer/react-lorem-image) [![npm version](https://badge.fury.io/js/react-lorem-image.svg)](http://badge.fury.io/js/react-lorem-image)

<img src="http://mustachify.me/?src=http://www.fillmurray.com/300/300"
align='right' width="200" height="200" hspace="20" alt="Fill Murray"/>

Placeholder images for your React prototypes.

Implemented services:
- http://www.nicenicejpg.com/
- http://www.fillmurray.com/
- https://placekitten.com/
- http://www.placecage.com/
- http://www.stevensegallery.com/

...all with the option to: http://mustachify.me/ !


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
  type={ string }       // Optional - One of (See implemented services below.)
                        //            A random type will be selected if empty
  width={ ?number }     // Optional - Defaults to 200
  height={ ?number }    // Optional - Defaults to width
  mustache={ ?bool }    // Optional - Defaults to false
  color={ ?bool }       // Optional - Defaults to true.
                        //            NOTE: Not all services have color.
/>
```

### Services / Types allowed:
  - vanilla - Nice Nice Jpg / Vanilla Ice.
  - kitten - Placekitten
  - murray - Fill Murray / Bill Murray
  - cage - Place Cage
  - segal - Steven Segal

# Contributions
Fell like there's missing a service? Want a feature added?
Feel free to open an issue or add a pull request.
