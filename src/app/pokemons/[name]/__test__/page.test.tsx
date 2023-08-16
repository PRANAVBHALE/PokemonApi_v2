import { render, screen } from '@testing-library/react';
import Page from '../page';
import { ReduxProvider } from '@/redux/provider';
import { PokemonDetails } from '@/mocks/mock-data/PokemonDetails';

describe('Pokemon Detail Page', () => {
  const props = {
    params: {
      name: 'bulbasaur',
    },
  };

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(PokemonDetails),
      })
    );
  });

  it('should display pokemon name', async () => {
    const Result = await Page(props);
    const children = Result;
    render(<ReduxProvider children={children}></ReduxProvider>);

    const name = screen.getByText(PokemonDetails.name);
    expect(name).toBeInTheDocument();
  });

  it('should display attributes such as base exp, weight, height of pokemon', async () => {
    const Result = await Page(props);
    const children = Result;
    render(<ReduxProvider children={children}></ReduxProvider>);

    const exp = screen.getByText('Base Exp:');
    const wt = screen.getByText('Weight:');
    const ht = screen.getByText('Height:');

    expect(exp).toBeInTheDocument();
    expect(wt).toBeInTheDocument();
    expect(ht).toBeInTheDocument();
  });

  it('should display img  of pokemon', async () => {
    const Result = await Page(props);
    const children = Result;
    render(<ReduxProvider children={children}></ReduxProvider>);

    const img = screen.getByRole('img', { name: 'bulbasaur.png' });
    expect(img).toBeInTheDocument();
  });
});
