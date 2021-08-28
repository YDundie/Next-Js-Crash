import { Nav } from './Nav';
import { Header } from './Header';
import Meta from './Meta';
import styles from '../styles/Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <Meta></Meta>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          {children}
        </main>
      </div>
    </>
  );
};
