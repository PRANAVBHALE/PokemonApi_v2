import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  favPokemons: string[];
}

const initialState: CounterState = {
  favPokemons: [],
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addFavPokemon: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.favPokemons = [...state.favPokemons, action.payload];
    },
    removeFavPokemon: (state, action) => {
      const filteredArr = state.favPokemons.filter(
        (item) => item !== action.payload
      );

      state.favPokemons = filteredArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavPokemon, removeFavPokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
