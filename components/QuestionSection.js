import Image from "next/image";
import styles from "../styles/components/Question.module.scss";

const QuestionSection = () => {
  return (
    <>
      <div className={styles.proposition}>
        <div className={styles.decoration}></div>
        <h2 className={styles.question}>Why should you have a cat?</h2>
        <p className={styles.about}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <a
          className={styles.actionLink}
          href="https://www.google.com/search?q=Why+should+you+have+a+cat%3F&source=hp&ei=4TA3Yqu1LcmelwTfhrSIDA&iflsig=AHkkrS4AAAAAYjc-8WOWQZZbGFgdnPnkKLR4siQa7Q_R&ved=0ahUKEwjrqYKt6tT2AhVJz4UKHV8DDcEQ4dUDCAc&uact=5&oq=Why+should+you+have+a+cat%3F&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeUGxYbGDJBWgBcAB4AIABYogBYpIBATGYAQCgAQKgAQGwAQA&sclient=gws-wiz"
          target="_blank"
          rel="noreferrer"
        >
          Read more &rarr;
        </a>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Image
            src="/image2.webp"
            alt="Cat sleeping in the lap"
            placeholder="blur"
            blurDataURL="/image2.webp"
            layout="fill"
          />
        </div>
        <div className={styles.galleryWrapper}>
          <Image
            src="/image3.webp"
            alt="Person holding cat annd looking and pawn"
            placeholder="blur"
            blurDataURL="/image3.webp"
            layout="fill"
          />
        </div>
        <div className={styles.galleryWrapper}>
          <Image
            src="/image1.webp"
            alt="Cat inside the backpack looking from small opening"
            placeholder="blur"
            blurDataURL="/image1.webp"
            layout="fill"
          />
        </div>
      </div>
    </>
  );
};

export default QuestionSection;
