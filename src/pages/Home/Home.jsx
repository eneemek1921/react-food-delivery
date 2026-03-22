import styles from './home.module.css'
import restaurants from '../../data/products/restaraunts.js'
import { Link } from 'react-router-dom'
import adv from '../../data/products/adv.js'

export default function Home() {

    return (
        <>
            <header className={styles.header}>
                <section className={styles.headerContent}>
                    {adv.map(product => (
                        <div key={product.id} className={styles.advCard}>
                            <h1>{product.title}</h1>
                            <img src={`${product.img}`} alt={`${product.title}`} />

                        </div>
                    ))}
                </section>
            </header>

            <main className={styles.main}>
            <section className={styles.mainContent}>
                {restaurants.map(restaurant => (
                    <Link to={`/${restaurant.link}`} key={restaurant.id} className={styles.linkRest}>
                        <img src={restaurant.img} alt={restaurant.title} className={styles.restImg} />
                        <h1 className={styles.restTitle}>{restaurant.title}</h1>
                        {restaurant.rating ? <h2 className={styles.restRati}>{restaurant.rating} ★</h2> : null}
                        {restaurant.speed ? <p className={styles.restSpeed}>{restaurant.speed} minutes</p> : null}
                    </Link>
                ))}
            </section>
        </main>
        </>
    )
}