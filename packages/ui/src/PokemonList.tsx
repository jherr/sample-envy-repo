import PokemonListClient from "./PokemonListClient";

export const dynamic = "force-dynamic";

export default async function PokemonList() {
  const listReq = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetFullPokemon {
          getFullPokemon(limit: 3) {
            id
            name
            url
            types {
              type {
                name
              }
            }
          }
        }
      `,
    }),
  });
  const pokemon = await listReq.json();

  const getPokemon = async (id: number) => {
    "use server";
    const dataReq = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetPokemon {
            getPokemon(id: ${id}) {
              id
              name
              url
              weight
              species {
                name
              }
              types {
                type {
                  name
                }
              }
              stats {
                base_stat
                stat {
                  name
                }
              }
              held_items {
                item {
                  name
                }
              }
              moves {
                move {
                  name
                }
              }
            }
          }
        `,
      }),
    });
    const data = await dataReq.json();
    return data.data.getPokemon;
  };

  return (
    <div>
      <PokemonListClient
        pokemon={pokemon.data.getFullPokemon}
        getPokemon={getPokemon}
      />
    </div>
  );
}
