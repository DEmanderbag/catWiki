import Head from "next/head";
import BreedsFeed from "../components/BreedsFeed";
import Hero from "../components/Hero";
import QuestionSection from "../components/QuestionSection";
import styles from "../styles/pages/Home.module.scss";

export default function Home({ data }) {
  const newData = data.slice(17, 21);
  return (
    <div>
      <Head>
        <title>CatWiki</title>
        <meta
          name="description"
          content="Get to know more about your cat breed"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.hero}>
          <Hero data={data} />
        </section>
        <section className={styles.breedsFeed}>
          <BreedsFeed breedsData={newData} />
        </section>
        <section className={styles.advantage}>
          <QuestionSection />
        </section>
      </main>
    </div>
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
