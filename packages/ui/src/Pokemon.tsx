"use client";
import { useEffect, useState } from "react";
import type { PokemonGetInfo } from "./types";

export default function Pokemon({
  id,
  getPokemon,
}: {
  id: number;
  getPokemon: (id: number) => Promise<PokemonGetInfo>;
}) {
  const [pokemon, setPokemon] = useState<PokemonGetInfo>();

  useEffect(() => {
    getPokemon(id).then((data) => setPokemon(data));
  }, [getPokemon, id]);

  return pokemon ? (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl mb-5 font-bold">{pokemon.name}</h1>
      <div className="flex gap-2 text-xl">
        <div className="font-light">Species</div>
        <div className="font-bold">{pokemon.species.name}</div>
      </div>
      <div className="flex gap-2 text-xl">
        <div className="font-light">Types</div>
        <div className="font-bold">
          {pokemon.types.map((s) => s.type.name).join(", ")}
        </div>
      </div>
      <div className="flex gap-2 text-xl">
        <div className="font-light">Stats</div>
        <div className="font-bold">
          {pokemon.stats
            .map((s) => `${s.stat.name}: ${s.base_stat}`)
            .join(", ")}
        </div>
      </div>
      <div className="flex gap-2 text-xl">
        <div className="font-light">Moves</div>
        <div className="font-bold">
          {pokemon.moves.map((m) => m.move.name).join(", ")}
        </div>
      </div>
      <div className="flex gap-2 text-xl">
        <div className="font-light">Held Items</div>
        <div className="font-bold">
          {pokemon.held_items.map((hi) => hi.item.name).join(", ")}
        </div>
      </div>
    </div>
  ) : null;
}
