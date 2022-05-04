import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { pokemonFunc } from "../../util";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

export const FavoriteCardPoke: FC<Props> = ({ id }) => {
  const { push } = useRouter();
  const onFavoriteClicked = (id: number) => {
    push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={() => onFavoriteClicked(id)}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
        <Card.Footer>{`#${pokemonFunc.addCeroToId(id)}`}</Card.Footer>
      </Card>
    </Grid>
  );
};
