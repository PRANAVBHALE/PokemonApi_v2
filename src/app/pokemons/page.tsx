import Button from '@/components/Button';
import Link from 'next/link';
import PokemonList from './PokemonList';
import { fetchPokemons } from '../../../lib/pokemons';
import { IPokemonListPage } from './types';

const styles = {
  btnType: {
    btn: 'w-32	h-16 rounded-none bg-sky-500 hover:bg-sky-800',
  },
  cardList:
    'flex flex-wrap	items-center  max-sm:justify-center max-md:justify-center',
};

export default async function Page({ searchParams }: IPokemonListPage) {
  //  const { searchParams } = props;
  const { limit, offset } = searchParams;
  const data = await fetchPokemons(limit, offset);

  if (data) {
    const { results: pokemons, next, previous } = data;
    const nextLink = next?.substring(next?.indexOf('?') + 1);
    const prevLink = previous?.substring(previous?.indexOf('?') + 1);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 	">
        <div data-testid="pokemon-cardlist" className={styles.cardList}>
          <PokemonList pokemons={pokemons} />
        </div>

        <div className="max-sm:justify-center max-md:w-full w-6/12 flex justify-between	m-4 ">
          <Link data-testid="prev" href={`/pokemons?${prevLink}`}>
            <Button styles={styles.btnType}>Prev</Button>
          </Link>

          <Link data-testid="next" href={`/pokemons?${nextLink}`}>
            <Button styles={styles.btnType}>Next</Button>
          </Link>
        </div>
      </main>
    );
  }
}
