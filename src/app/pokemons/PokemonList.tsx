'use client';
import type { RootState } from '@/redux/store';

import { Avatar } from '@/components/Avatar';
import Card from '@/components/Card';
import Link from 'next/link';
import React from 'react';
import emptyball from '../../../public/emptyball.png';
import pokeball from '../../../public/fullpokeball.png';
import { useDispatch, useSelector } from 'react-redux';
import { IPokemonList } from './types';

import {
  addFavPokemon,
  removeFavPokemon,
} from '@/redux/features/pokemons-slice';

const styles = {
  cardWrapper: 'w-48 text-center',
  avatarWrapper: 'h-6 w-6 relative top-6',
  avatar: 'absolute inline-block h-6 w-6 rounded-full ring-2 ring-white',
  card: 'position p-4 m-4 shadow-sky-500 border border-sky-500',
};

function PokemonList({ pokemons }: IPokemonList) {
  let ballType;
  const favPokemons = useSelector(
    (state: RootState) => state.pokemons.favPokemons
  );
  const dispatch = useDispatch();

  function addPokemon(name: string) {
    dispatch(addFavPokemon(name));
  }

  function removePokemon(name: string) {
    dispatch(removeFavPokemon(name));
  }

  function handleOnClick(name: string) {
    if (favPokemons.includes(name)) {
      //setfree
      removePokemon(name);
    } else {
      //catch
      addPokemon(name);
    }
  }

  return (
    <>
      {pokemons.map((pokemon) => {
        ballType = favPokemons.includes(pokemon.name) ? pokeball : emptyball;
        return (
          <div
            className="m-16"
            key={pokemon.name}
            data-testid="pokemon-list-item"
          >
            <Avatar
              styles={styles}
              img={ballType}
              handleOnClick={() => handleOnClick(pokemon.name)}
            />
            <div className={styles.cardWrapper}>
              <Link href={`/pokemons/${pokemon.name}`}>
                <Card styles={styles}>{pokemon.name}</Card>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PokemonList;
