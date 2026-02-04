import { fetchPokemonDetail } from "../lib/data";
import Image from "next/image";
import Link from "next/link";

export async function Navbar(){
    const ids = [1,2,3,4,5,6,7,8,9]

    const pokemonList = await Promise.all(ids.map(id => fetchPokemonDetail(id)));

    return(
        <aside className="hidden md:flex flex-col w-40 m-4 items-center p-3 gap-5 bg-background/90">
            <Image
                src="/pokemon-logo.webp"
                alt="Logo of pokemon"
                width={80}
                height={50}
            />
            {pokemonList.map((poke) => (
                <Link 
                key={poke.id} 
                href={`/pokemons/${poke.id}`} // Esto cambia la URL a /pokemons/1, /pokemons/2, etc.
                className="hover:bg-yellow-300/95 ..."
                >
                    {poke.name}
                </Link>    
            ))}
        </aside>
    );
}