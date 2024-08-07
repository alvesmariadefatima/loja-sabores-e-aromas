import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.containerNavbar}>
                <div className={styles.containerLogotipo}>
                    <Link to="/">
                        <img className={styles.imgLogotipo} src="/Logotipo Loja Sabores & Aromas.png" alt="Logotipo Loja Sabores & Aromas" />
                    </Link>
                </div>
                <div className={styles.linkContainer}>
                    <a className={styles.linkNavbar} href="/">Home</a>
                    <a className={styles.linkNavbar} href="#produtos">Produtos</a>
                    <a className={styles.linkNavbar} href="#contato">Contato</a>
                    <a className={styles.linkNavbar} href="/login">Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;