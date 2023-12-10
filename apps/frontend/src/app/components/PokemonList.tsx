"use client";
import { useState } from "react";
import Pokemon from "./Pokemon";

export default function PokemonList({
  pokemon,
}: {
  pokemon: {
    id: string;
    name: string;
  }[];
}) {
  const [id, setId] = useState<number>();

  return (
    <div className="flex gap-2">
      <div className="w-1/4 flex-nowrap">
        <h1 className="text-3xl mb-5 whitespace-nowrap">Pokemon List</h1>
        {pokemon.map((p) => (
          <div key={p.id}>
            <a
              onClick={(evt) => {
                evt.preventDefault();
                setId(+p.id);
              }}
              className="cursor-pointer my-1"
              key={p.id}
            >
              {p.name}
            </a>
          </div>
        ))}
      </div>
      <div>{id !== undefined ? <Pokemon id={id} /> : null}</div>
    </div>
  );
}
