import styles from "../../styles/layout/Layout.module.scss";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
