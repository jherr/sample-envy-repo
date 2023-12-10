import PokemonList from "./components/PokemonList";

export default async function Home() {
  const listReq = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          getAllPokemon(limit: 50) {
            id
            name
            url
          }
        }
      `,
    }),
  });
  const pokemon = await listReq.json();

  return (
    <div>
      <PokemonList pokemon={pokemon.data.getAllPokemon} />
    </div>
  );
}
