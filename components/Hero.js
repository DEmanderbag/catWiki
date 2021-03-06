import styles from "../styles/components/Hero.module.scss";
import Logo from "./layout/Logo";
import SearchBar from "./SearchBar";

const Hero = ({ data }) => {
  return (
    <>
      <div className={styles.logo}>
        <Logo color={"var(--light)"} />
      </div>
      <p className={styles.message}>Get to know more about your cat breed</p>
      <SearchBar placeholder={"Enter you breed"} data={data} />
    </>
  );
};

export default Hero;
