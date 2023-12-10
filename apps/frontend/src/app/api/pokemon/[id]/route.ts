import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const listReq = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetPokemonByID {
          getPokemon(id: ${id}) {
            name
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
  const data = await listReq.json();
  return NextResponse.json(data.data.getPokemon);
}
