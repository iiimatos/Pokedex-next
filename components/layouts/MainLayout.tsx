import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window == "undefined" ? "" : window.location.origin;

export const MainLayout: FC<Props> = ({ children, title = "Pokemon App" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Ivan Matos"></meta>
        <meta
          name="description"
          content={`Information about pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Information About the pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`This is the page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
