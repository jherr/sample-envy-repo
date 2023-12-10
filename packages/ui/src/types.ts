export interface PokemonGetInfo {
  id: number;
  url: string;
  name: string;
  weight: number;
  species: {
    name: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  held_items: any[];
  moves: {
    move: {
      name: string;
    };
  }[];
}
