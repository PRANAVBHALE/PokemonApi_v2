export interface IPokemonListPage {
  searchParams: {
    limit: number;
    offset: number;
  };
}

export interface IPokemonList {
  pokemons: {
    name: string;
  }[];
}
