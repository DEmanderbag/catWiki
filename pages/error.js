import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pages/ErrorPage.module.scss";

export default function Error() {
  return (
    <>
      <Head>
        <title>Error | CatWiki</title>
        <meta
          name="description"
          content="Something went wrong, try again later"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.errorCard}>
        <h1>
          Looks like there is currenly no data for this Cat, try again later
        </h1>
        <Link href="/">
          <a>Go back &rarr;</a>
        </Link>
      </section>
    </>
  );
}
