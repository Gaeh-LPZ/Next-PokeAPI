import { Card } from "../ui/card"
import { fetchPokemonDetail } from "../lib/data";

export default async function Page(){
    const ids = [1,2,3,4,5,6,7,8,9]

    const pokemonList = await Promise.all(ids.map(id => fetchPokemonDetail(id)));
    
    return (
        pokemonList.map((poke) => (
            <Card key={poke.id} pokemon={poke}/>
        ))
    );
}