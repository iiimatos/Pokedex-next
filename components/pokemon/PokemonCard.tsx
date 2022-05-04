import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { pokemonFunc } from "../../util";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, img, name } }) => {
  const { push } = useRouter();

  const onClick = () => {
    push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={4} md={3} xl={2} key={id} onClick={onClick}>
      <Card hoverable clickable bordered>
        <Card.Body css={{ padding: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{pokemonFunc.addCeroToId(id || 0)}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
