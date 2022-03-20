import Head from "next/head";
import CatList from "../components/CatList";
import styles from "../styles/BreedsPage.module.scss";

export default function Breeds({ data }) {
  return (
    <>
      <Head>
        <title>Breeds | CatWiki</title>
        <meta
          name="description"
          content={`List of ${data.length} cat breeds`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.pageGrid}>
        <h1 className={styles.title}>List of {data.length} cat breeds</h1>
        {data.map((cat, index) => (
          <CatList key={index} data={cat} />
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const req = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await req.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}
