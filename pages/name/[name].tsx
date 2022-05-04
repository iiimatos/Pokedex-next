import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { PokeApi } from "../../api";
import { MainLayout } from "../../components/layouts";
import {
  Pokemon,
  PokemonListResponse,
  SmallPokemon,
  Type,
} from "../../interfaces";
import { localFavorites, pokemonFunc } from "../../util";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existPokemonInFav(pokemon.id)
  );

  const handlerToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 0.85,
        y: 0.1,
      },
    });
  };

  return (
    <MainLayout title={pokemon.name.toUpperCase()}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={2} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Header>
              <Text h4 weight="bold">
                #{pokemonFunc.addCeroToId(pokemon.id)}
              </Text>
            </Card.Header>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || ""}
                alt={pokemon.name}
                width="100%"
                height="200px"
              />
              <Container
                css={{
                  marginTop: 15,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pokemon.types.map(({ type }: Type) => (
                  <Text
                    key={type.name}
                    span
                    className={`type type-${type.name}`}
                  >
                    {type.name}
                  </Text>
                ))}
              </Container>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={handlerToggleFavorite}
              >
                {isInFavorites ? "In Favorites" : "Save Favorites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await PokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemons: SmallPokemon[] = data.results;
  return {
    paths: pokemons.map(({ name }) => ({
      params: { name },
    })),
    // fallback: false,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await pokemonFunc.pokemonData(name);
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  };
};

export default PokemonByNamePage;
