import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

function Layout({ children }: IProps) {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
