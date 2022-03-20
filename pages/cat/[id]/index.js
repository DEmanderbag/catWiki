import Head from "next/head";
import Image from "next/image";
import Scale from "../../../components/Scale";
import Gallery from "../../../components/Gallery";
import styles from "../../../styles/pages/CatPage.module.scss";

export default function cat({ cat, randomBreedImage }) {
  return (
    <>
      <Head>
        <title>{cat.name} | CatWiki</title>
        <meta name="description" content={cat.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.pageUi}>
        <div className={styles.imageWrapper}>
          <Image
            src={randomBreedImage[0].url}
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL={randomBreedImage[0].url}
            width={500}
            height={400}
          />
        </div>
        <article className={styles.catInfo}>
          <h1 className={styles.title}>{cat.name}</h1>
          <p className={styles.description}>{cat.description}</p>
          <div className={styles.data}>
            <p>
              <span className={styles.bold}>Temperament: </span>
              {cat.temperament}
            </p>
            <p>
              <span className={styles.bold}>Origin: </span>
              {cat.origin}
            </p>
            <p>
              <span className={styles.bold}>Life Span: </span>
              {cat.life_span}
            </p>
            <Scale label={"Adaptability"} value={cat.adaptability} />
            <Scale label={"Affection level"} value={cat.affection_level} />
            <Scale label={"Child Friendly"} value={cat.child_friendly} />
            <Scale label={"Grooming"} value={cat.grooming} />
            <Scale label={"Intelligence"} value={cat.intelligence} />
            <Scale label={"Health issues"} value={cat.health_issues} />
            <Scale label={"Social needs"} value={cat.social_needs} />
            <Scale label={"Stranger friendly"} value={cat.stranger_friendly} />
          </div>
        </article>
        <section className={styles.gallery}>
          <Gallery randomBreedImage={randomBreedImage} />
        </section>
      </section>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const requestType = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
  };
  try {
    const reqCat = await fetch(
      `https://api.thecatapi.com/v1/breeds/${id}`,
      requestType
    );
    const cat = await reqCat.json();
    const requestBreedImage = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=8&size=small`,
      requestType
    );
    const randomBreedImage = await requestBreedImage.json();
    return {
      props: { cat, randomBreedImage },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    redirect: {
      destination: "/error",
    },
  };
}
