import styles from './DefaultLayout.module.scss';
import { Header, Footer } from '../components';

function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
