import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/CatList.module.scss";

const CatList = ({ data }) => {
  const { name, description, image, id } = data;
  let imageData = "placeholder";
  if (image !== undefined || Object.keys(!image).length !== 0) {
    imageData = image.url;
  }
  return (
    <Link href={`/cat/${id}`}>
      <a>
        <article className={styles.pageGrid}>
          <div className={styles.imageWrapper}>
            {image === undefined || Object.keys(image).length === 0 ? (
              <div className={styles.noImage}></div>
            ) : (
              <Image
                src={imageData}
                alt="Picture of the author"
                placeholder="blur"
                blurDataURL={imageData}
                width={200}
                height={200}
                layout="responsive"
              />
            )}
          </div>
          <div>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default CatList;
