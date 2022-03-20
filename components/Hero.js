import styles from "../styles/components/Hero.module.scss";
import Logo from "./layout/Logo";
import SearchBar from "./SearchBar";

const Hero = ({ data }) => {
  return (
    <>
      <Logo />
      <p className={styles.message}>Get to know more about your cat breed</p>
      <SearchBar placeholder={"Enter you breed"} data={data} />
    </>
  );
};

export default Hero;
