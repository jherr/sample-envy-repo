import GoodList from "./components/GoodList";

export const dynamic = "force-dynamic";

export default async function Home() {
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
  const pokemon = await listReq.json();

  return (
    <div>
      <GoodList pokemon={pokemon.data.getFullPokemon} />
    </div>
  );
}
