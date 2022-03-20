import styles from "../styles/components/Scale.module.scss";

const Scale = ({ label, value }) => {
  const scaleSize = [...Array(5).keys()];
  const valueSize = [...Array(value).keys()];

  return (
    <div className={styles.grid}>
      <p className={styles.bold}>{label}: </p>
      <div className={styles.scaleGrid}>
        {scaleSize.map((scale, index) => (
          <div
            key={index}
            className={`${styles.scale} ${
              scaleSize[index] === valueSize[index] ? styles.scaleActive : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Scale;
