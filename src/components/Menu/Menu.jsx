import { Link } from "react-router-dom";
import styles from './menu.module.css'
import { useAdress } from "../../contexts/AdressContext";

export default function Menu() {
    const {adress} = useAdress()

    return (
        <menu className={styles.header}>
            <nav className={styles.headerContent}>
                <Link to='/' className={styles.linkHome}>Home</Link>
                <Link to='/adress' className={styles.linkAdress}>Adress</Link>
                <Link to='/contact' className={styles.linkContact}>Contact</Link>
                <Link to='/cart' className={styles.linkCart}>Cart</Link>
                
                {adress && adress.Street && adress.Building && adress.Number && (
                    <p className={styles.pAdress}>
                        {adress.Street}, {adress.Building}, {adress.Number}
                    </p>
                )}
            </nav>
        </menu>
    )
}