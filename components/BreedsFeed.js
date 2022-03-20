import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/BreedsFeed.module.scss";

const BreedsFeed = ({ breedsData }) => {
  return (
    <>
      <p className={styles.trending}>Most Searched Breeds</p>
      <div className={styles.decoration}></div>
      <div className={styles.infoAction}>
        <h2 className={styles.info}>66+ Breeds For you to discover</h2>
        <Link href="/breeds">
          <a className={styles.actionLink}>See more &rarr;</a>
        </Link>
      </div>
      <div className={styles.previewGrid}>
        {breedsData.map((article) => (
          <Link key={article.id} href={`/cat/${article.id}`}>
            <a>
              <article className={styles.card} key={article.id}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={article.image.url}
                    alt="Picture of the author"
                    placeholder="blur"
                    blurDataURL={article.image.url}
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                <p className={styles.cardName}>{article.name}</p>
              </article>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BreedsFeed;
