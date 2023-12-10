"use client";
import { useState } from "react";
import Pokemon from "@/app/components/Pokemon";
import type { PokemonGetInfo } from "@/app/types";

export default function PokemonList({
  pokemon,
}: {
  pokemon: PokemonGetInfo[];
}) {
  const [selectedId, setSelectedId] = useState<number>();

  return (
    <div className="flex gap-2">
      <div className="w-1/4 flex-nowrap">
        <h1 className="text-3xl mb-5 whitespace-nowrap">Pokemon List</h1>
        {pokemon.map((p) => (
          <div key={p.id}>
            <a
              onClick={(evt) => {
                evt.preventDefault();
                setSelectedId(+p.id);
              }}
              className="cursor-pointer my-1"
              key={p.id}
            >
              <div className="font-bold">{p.name}</div>
              <div className="text-sm font-light ml-3">
                {p.types.map((t) => t.type.name).join(", ")}
              </div>
            </a>
          </div>
        ))}
      </div>
      <div>
        {selectedId !== undefined ? (
          <Pokemon
            id={selectedId}
            pokemon={pokemon.find(({ id }) => +id === selectedId)}
          />
        ) : null}
      </div>
    </div>
  );
}
