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
        <a className={styles.actionLink} href="">
          Read more &rarr;
        </a>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Image
            src="/image2.png"
            alt="Cat sleeping in the lap"
            placeholder="blur"
            blurDataURL="/image2.png"
            layout="fill"
          />
        </div>
        <div className={styles.galleryWrapper}>
          <Image
            src="/image3.png"
            alt="Person holding cat annd looking and pawn"
            placeholder="blur"
            blurDataURL="/image3.png"
            layout="fill"
          />
        </div>
        <div className={styles.galleryWrapper}>
          <Image
            src="/image1.png"
            alt="Cat inside the backpack looking from small opening"
            placeholder="blur"
            blurDataURL="/image1.png"
            layout="fill"
          />
        </div>
      </div>
    </>
  );
};

export default QuestionSection;
