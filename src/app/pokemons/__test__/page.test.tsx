import Page from '../page';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { ReduxProvider } from '@/redux/provider';
import { Pokemons } from '@/mocks/mock-data/Pokemons';

describe('Pokemons Page', () => {
  const props = {
    // params: { surveyType: '123' },
    searchParams: {
      limit: 10,
      offset: 0,
    },
  };

  // global.fetch = jest.fn().mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(data),
  // });

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(Pokemons),
      })
    );
  });

  xit('should have next and prev btn', async () => {
    const Result = await Page(props);
    const children = Result;
    render(<ReduxProvider children={children}></ReduxProvider>);
    const nextBtn = screen.getByRole('button', { name: /next/i });
    const prevBtn = screen.getByRole('button', { name: /prev/i });

    expect(nextBtn).toBeInTheDocument;
    expect(prevBtn).toBeInTheDocument;
  });

  it('should have card list Element', async () => {
    const Result = await Page(props);
    const children = Result;
    render(<ReduxProvider children={children}></ReduxProvider>);
    const cardListEl = screen.getByTestId('pokemon-cardlist');
    expect(cardListEl).toBeInTheDocument;
  });

  it('next btn should have link to next link pokemon list', async () => {
    const Result = await Page(props);
    const children = Result;

    render(<ReduxProvider children={children}></ReduxProvider>);
    const nextBtn = await screen.findByTestId('next');
    expect(nextBtn).toHaveAttribute('href', '/pokemons?offset=10&limit=10');
  });

  it('prev btn should have link to null', async () => {
    const Result = await Page(props);
    const children = Result;

    render(<ReduxProvider children={children}></ReduxProvider>);
    const prevBtn = await screen.findByTestId('prev');
    expect(prevBtn).toHaveAttribute('href', '/pokemons?undefined');
  });
});
