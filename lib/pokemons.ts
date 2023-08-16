//import fetch from 'node-fetch';

async function fetchPokemons(limit: number, offset: number) {
  const res = await fetch(
    `${process.env.APP_API_BASE_URL}?limit=${limit}&offset=${offset}`
  );

  if (res?.status === 400 || res?.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log('here');
    throw new Error('Failed to fetch data');
  }

  return res?.json();
}

async function fetchPokemonDetails(name: string) {
  const res = await fetch(`${process.env.APP_API_BASE_URL}/${name}`);

  if (res?.status === 400 || res?.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log('here');
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export { fetchPokemons, fetchPokemonDetails };
