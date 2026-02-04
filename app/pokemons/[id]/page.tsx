// app/pokemons/[id]/page.tsx
import { Card } from "../../ui/card";
import { fetchPokemonDetail } from "../../lib/data";

// Definimos que params es una Promesa
export default async function Page({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;

    const poke = await fetchPokemonDetail(parseInt(id));

    return (
        <Card pokemon={poke} />
    );
}