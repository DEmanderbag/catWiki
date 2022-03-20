import Logo from "./Logo";
import styles from "../../styles/layout/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo color={"var(--light)"} />
      <p>&copy; created by DEmanderbag - devChallenge.io 2022</p>
    </footer>
  );
};

export default Footer;
