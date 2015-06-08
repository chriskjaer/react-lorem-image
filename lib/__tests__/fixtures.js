export default [{
  description: 'Vanilla Ice',
  input: {
    type: 'vanilla',
    height: 400,
    width: 600
  },
  expected: 'http://nicenicejpg.com/600/400'
}, {
  description: 'Bill Murray',
  input: {
    type: 'murray',
    height: 300,
    width: 200
  },
  expected: 'http://www.fillmurray.com/200/300'
}, {
  description: 'Bill Murray, without color',
  input: {
    type: 'murray',
    height: 300,
    width: 200,
    color: false
  },
  expected: 'http://www.fillmurray.com/g/200/300'
}, {
  description: 'Vanilla Ice, with mustache',
  input: {
    type: 'vanilla',
    height: 400,
    width: 600,
    mustache: true
  },
  expected: 'http://mustachify.me/?src=http://nicenicejpg.com/600/400'
}, {
  description: 'Bill Murray, without color, with mustache',
  input: {
    type: 'murray',
    height: 300,
    width: 200,
    color: false,
    mustache: true
  },
  expected: 'http://mustachify.me/?src=http://www.fillmurray.com/g/200/300'
}, {
  description: 'Kitten, without color',
  input: {
    type: 'kitten',
    height: 300,
    width: 200,
    color: false
  },
  expected: 'https://placekitten.com/g/200/300'
}, {
  description: 'Kitten',
  input: {
    type: 'kitten',
    height: 300,
    width: 300
  },
  expected: 'https://placekitten.com/300/300'
}, {
  description: 'Cage',
  input: {
    type: 'cage',
    height: 300,
    width: 200
  },
  expected: 'http://www.placecage.com/200/300'
}, {
  description: 'Cage, crazy',
  input: {
    type: 'cage',
    height: 300,
    width: 200,
    crazy: true
  },
  expected: 'http://www.placecage.com/c/200/300'
}, {
  description: 'Cage, without color',
  input: {
    type: 'cage',
    height: 300,
    width: 400,
    color: false
  },
  expected: 'http://www.placecage.com/g/400/300'
}, {
  description: 'Steven Segal',
  input: {
    type: 'segal',
    height: 300,
    width: 200
  },
  expected: 'http://www.stevensegallery.com/200/300'
}, {
  description: 'Stevel Segal, without color',
  input: {
    type: 'segal',
    height: 300,
    width: 400,
    color: false
  },
  expected: 'http://www.stevensegallery.com/g/400/300'
}];
