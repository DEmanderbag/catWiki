import Image from "next/image";
import styles from "../styles/components/Gallery.module.scss";
const Gallery = ({ randomBreedImage }) => {
  return (
    <>
      <h2 className={styles.title}>Other photos</h2>
      <div className={styles.grid}>
        {randomBreedImage.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt="Picture of the author"
            placeholder="blur"
            blurDataURL={image.url}
            width={400}
            height={400}
            layout="responsive"
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
