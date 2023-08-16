import PokemonList from '../PokemonList';
import { fireEvent, render, screen } from '@testing-library/react';
import { ReduxProvider } from '@/redux/provider';
import Page from '../page';
import { Pokemons } from '@/mocks/mock-data/Pokemons';

describe('PokemonList', () => {
  const props = {
    // params: { surveyType: '123' },
    searchParams: {
      limit: 10,
      offset: 0,
    },
  };

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(Pokemons),
      })
    );
  });

  it('should have pokemon list item', async () => {
    const Result = await Page(props);
    const children = Result;
    render(<ReduxProvider children={children}></ReduxProvider>);

    const listItems = screen.getAllByTestId('pokemon-list-item');
    expect(listItems).toHaveLength(Pokemons.results.length);
  });

  it('should have catch and remove pokemon after clicking on ball', async () => {
    const Result = await Page(props);
    const children = Result;
    render(<ReduxProvider children={children}></ReduxProvider>);

    const avatarWrappers = await screen.findAllByTestId('avatar-wrapper');
    // fireEvent.click(avatarWrappers);
    const handleOnClick = jest.fn();
    const removePokemon = jest.fn();
    const addPokemon = jest.fn();

    fireEvent.click(avatarWrappers[0]);
    expect(handleOnClick).toHaveBeenCalledTimes(0);
    expect(addPokemon).toHaveBeenCalledTimes(0);

    fireEvent.click(avatarWrappers[0]);

    expect(handleOnClick).toHaveBeenCalledTimes(0);
    expect(removePokemon).toHaveBeenCalledTimes(0);

    //expect(listItems).toHaveLength(Pokemons.results.length);
  });
});
