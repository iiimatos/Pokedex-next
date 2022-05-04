import { PokeApi } from "../api";
import { Pokemon } from "../interfaces";

const addCeroToId = (id: number) => {
  return id.toString().padStart(3, "0");
};

const pokemonData = async (nameOrId: string) => {
  try {
    const { data: pokemon } = await PokeApi.get<Pokemon>(
      `/pokemon/${nameOrId}`
    );
    return {
      id: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites,
      types: pokemon.types,
    };
  } catch (error) {
    return null;
  }
};

export default { addCeroToId, pokemonData };
