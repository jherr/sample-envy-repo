import { NextResponse } from "next/server";

export async function GET() {
  const listReq = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          getAllPokemon(limit: 10) {
            id
            name
            url
          }
        }
      `,
    }),
  });
  const data = await listReq.json();
  return NextResponse.json(data.data.getAllPokemon);
}
