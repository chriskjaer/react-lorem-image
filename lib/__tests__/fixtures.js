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
}];

