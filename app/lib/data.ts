export async function fetchPokemonDetail(id: number){
    try { 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const datos = await response.json();

        const nombre = datos.name;
        const hpStat = datos.stats.find((s: any) => s.stat.name === "hp");
        const hp = hpStat.base_stat;
        const image = datos.sprites.other['dream_world'].front_default;

        const abilityPromises = datos.abilities.map(async (item: any) => {
            const response = await fetch(item.ability.url);
            const datos = await response.json();
            const abilityEntry = datos.effect_entries.find((entry: any) => entry.language.name === 'en');

            return {
                name: item.ability.name,
                description: abilityEntry ? abilityEntry.short_effect : "No description"
            };
        })

        const abilitiesFull = await Promise.all(abilityPromises);
        return {
            id: datos.id,
            name: nombre,
            hp: hp.toString(),
            image: image,
            abilities: abilitiesFull
        };
    } catch (error){
        console.error('Error en la llamada a la api', error);
        throw new Error('No se pudo cargar al pokemon');
    }
}