"use client";
import { useState, useEffect } from "react";
import Pokemon from "@/app/components/Pokemon";
import type { PokemonGetInfo } from "@/app/types";

export default function PokemonList({
  pokemon,
}: {
  pokemon: {
    id: string;
    name: string;
  }[];
}) {
  const [id, setId] = useState<number>();
  const [type, setTypes] = useState<Record<string, string[]>>({});

  useEffect(() => {
    for (const p of pokemon) {
      fetch(`/api/pokemon/${p.id}`)
        .then((res) => res.json())
        .then((data: PokemonGetInfo) => {
          setTypes((prev) => {
            prev[p.id] = data.types.map((s) => s.type.name);
            return prev;
          });
        });
    }
  }, [pokemon]);

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
              <div className="font-bold">{p.name}</div>
              {type[p.id] ? (
                <div className="text-sm font-light ml-3">
                  {type[p.id].join(", ")}
                </div>
              ) : null}
            </a>
          </div>
        ))}
      </div>
      <div>{id !== undefined ? <Pokemon id={id} /> : null}</div>
    </div>
  );
}
