import { Container, Image, Text } from "@nextui-org/react";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h2>You don&#39;t have favorites</Text>
      <Image
        height={300}
        width={300}
        css={{ opacity: 0.1 }}
        alt="No Image"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
      />
    </Container>
  );
};

export default NoFavorites;
