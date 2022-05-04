import { useEffect, useState } from "react";
import { MainLayout } from "../../components/layouts";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../util";
import { FavoritesPoke } from "../../components/pokemon";

const FavoritesPages = () => {
  const [pokemons, setPokemons] = useState<number[]>([]);

  useEffect(() => {
    setPokemons(localFavorites.getFavorites());
  }, []);

  return (
    <MainLayout>
      {pokemons.length !== 0 ? (
        <FavoritesPoke pokemons={pokemons} />
      ) : (
        <NoFavorites />
      )}
    </MainLayout>
  );
};

export default FavoritesPages;
