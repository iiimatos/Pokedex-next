const toggleFavorites = (id: number): void => {
  let favorites: number[] = getFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existPokemonInFav = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  const favorites: number[] = getFavorites();
  return favorites.includes(id);
};

const getFavorites = (): number[] =>
  JSON.parse(localStorage.getItem("favorites") || "[]");

export default { toggleFavorites, existPokemonInFav, getFavorites };
