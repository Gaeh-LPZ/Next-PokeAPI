import Image from "next/image";

interface CardProps {
    pokemon : {
        name : string;
        hp : string;
        abilities : {
            name : string;
            description: string;
        }[];
        image : string;
    }
}

export function Card({pokemon} : CardProps){
    return (
        <section className="flex flex-col items-center gap-2 w-64 h-96 border-6 border-yellow-300 rounded-md p-2 bg-linear-to-tr from-slate-300 to-slate-800/80">
            <header className="flex flex-row justify-between w-full font-bold">
                <h1 id="Pokemon-name" className="capitalize">{pokemon.name}</h1>
                <p id="Pokemon-Health"><small>HP</small>{pokemon.hp}</p>
            </header>
            <Image src={pokemon.image} alt={`Image of ${pokemon.name}`} width={120} height={100}/>
            {pokemon.abilities.map((ability, index) => (
                <div key={index}    >
                    <h2 className="font-bold capitalize">{ability.name}</h2>
                    <p className="text-sm">{ability.description}</p>
                </div>
            ))}
        </section>
    )
}