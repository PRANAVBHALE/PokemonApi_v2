import Card from '@/components/Card';
import { fetchPokemonDetails } from '../../../../lib/pokemons';
import { IPokemonDetailPage } from './types';

const styles = {
  card: 'p-4 m-4 shadow-sky-500 border border-sky-500',
  img: 'w-1/10 p-4 isplay: inline',
  container: 'py-0.5 px-4',
  grid: 'grid gap-4 grid-cols-2 grid-rows-3 text-left',
};

export default async function Page(props: IPokemonDetailPage) {
  const { params } = props;
  const { name } = params;

  const data = await fetchPokemonDetails(name);

  console.log('data', data);

  if (data) {
    return (
      <div className="flex justify-center	items-center h-screen text-center">
        <Card styles={styles}>
          <img
            src={data.sprites.front_default}
            alt={data.sprites.front_default}
            className={styles.img}
            loading="lazy"
          />
          <div className={styles.container}>
            <h2>
              <b>{data.name}</b>
            </h2>
            <div className={styles.grid}>
              <div>Base Exp: </div>
              <div>
                {' '}
                <meter
                  id="disk_c"
                  value={data.base_experience}
                  min="0"
                  max="500"
                ></meter>
              </div>

              <div>Weight: </div>
              <div>
                <meter
                  id="disk_c"
                  value={data.weight}
                  min="0"
                  max="1000"
                ></meter>
              </div>
              <div>Height: </div>
              <div>
                <meter id="disk_c" value={data.height} min="0" max="50"></meter>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
