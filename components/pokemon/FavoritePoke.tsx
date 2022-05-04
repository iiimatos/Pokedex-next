import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPoke } from "./FavoriteCardPoke";

interface Props {
  pokemons: number[];
}

export const FavoritesPoke: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPoke key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
