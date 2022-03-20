import styles from "../../styles/layout/Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
