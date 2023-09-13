import styles from './Header.module.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={styles.titleContainer}>
                <a href="/" className={styles.title}>Conversor de Moedas</a>
            </div>
            <ul className={styles.navList}>
                <li><Link to='/' className={styles.Link}>Home</Link></li>
                <li><Link to='/sobre' className={styles.Link}>Sobre</Link></li>
            </ul>
        </header>
    )
}

export default Header