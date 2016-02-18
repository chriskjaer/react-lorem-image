const SERVICES = {
  vanilla({ width, height }) {
    return `http://www.nicenicejpg.com/${ width }/${ height }`;
  },
  murray({ width, height, color }) {
    return `http://www.fillmurray.com/${ color ? '' : 'g/' }${ width }/${ height }`;
  },
  kitten({ width, height, color }) {
    return `https://placekitten.com/${ color ? '' : 'g/' }${ width }/${ height }`;
  },
  segal({ width, height, color }) {
    return `http://www.stevensegallery.com/${ color ? '' : 'g/' }${ width }/${ height }`;
  },
  cage({ width, height, color, crazy }) {
    const type = crazy ? 'c/' : !color ? 'g/' : '';
    return `http://www.placecage.com/${ type }${ width }/${ height }`;
  },
  vaughn({ width, height }) {
    return `http://placevaughnandfranco.it/img/${ width }/${ height }`;
  },
  bear({ width, height, color }) {
    return `http://placebear.com/${ color ? '' : 'g/' }${ width }/${ height }`;
  },
  beerhold({ width, height, color }) {
    return `http://beerhold.it/${ width }/${ height }${ color ? '' : '/g' }`;
  }
};

export const TYPES = Object.keys(SERVICES);

const MUSTACHE = 'http://mustachify.me/?src=';

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateURL({
  color = true,
  width = 200,
  height = width,
  mustache = false,
  crazy = false,
  type = getRandom(TYPES)
} = {}) {

  const url = SERVICES[type]({ color, width, height, crazy });
  return {
    type,
    width,
    height,
    url: mustache ? MUSTACHE + url : url
  };
}
