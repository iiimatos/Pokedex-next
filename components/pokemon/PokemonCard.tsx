import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, img, name } }) => {
  const { push } = useRouter();

  const onClick = () => {
    push(`/pokemon/${id}`);
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
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
