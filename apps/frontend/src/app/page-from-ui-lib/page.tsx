import PokemonList from "@repo/ui/PokemonList";

export default async function Home() {
  /* @ts-expect-error Server Component */
  return <PokemonList />;
}
