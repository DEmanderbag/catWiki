import Link from "next/link";
import styles from "../../styles/layout/Header.module.scss";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.space}>
      <Link href="/">
        <a>
          <Logo color={"var(--text)"} />
          <span className="sr-only">Go home</span>
        </a>
      </Link>
    </header>
  );
};

export default Header;
