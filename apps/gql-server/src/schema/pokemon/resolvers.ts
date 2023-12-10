import fetch from "node-fetch";

export default {
  Query: {
    async getAllPokemon(_: unknown, { limit }: { limit: number }) {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit || 10000}&offset=0`
      );
      const json = await resp.json();

      return json.results.map(
        ({ name, url }: { name: string; url: string }, index: number) => ({
          id: index + 1,
          name,
          url,
        })
      );
    },

    async getPokemon(_: unknown, { id }: { id: number }) {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const json = await resp.json();
      return json;
    },

    async getFullPokemon(_: unknown, { limit = 5 }: { limit: number }) {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit || 10000}&offset=0`
      );
      const json = await resp.json();

      return await Promise.all(
        json.results.map(async ({ url }: { url: string }) => {
          console.log(url);
          const resp = await fetch(url);
          const data = await resp.json();
          return {
            ...data,
            url,
          };
        })
      );
    },
  },
};
