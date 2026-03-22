import { useMemo, useState } from "react"
import mak from "../../data/products/mak"
import styles from './mak.module.css'
import Cart from "../../components/Cart/Cart"
import { useCart } from "../../contexts/CartContext"

export default function Mak() {
    const [selected, setSelected] = useState('all')
    const [activeBtn, setActiveBtn] = useState('all')
    const {addToCart, addProductInCart} = useCart()
    
    const filteredProducts = useMemo(() => 
        selected === 'all' 
            ? mak 
            : mak.filter(p => p.category === selected), 
        [selected]
    )
    
    return (
        <div className={styles.all}>
            <main className={styles.main}>
                <section className={styles.mainContent}>
                    <div className={styles.filters}>
                        <button 
                            className={`${styles.btnFilt} ${activeBtn === 'all' ? styles.btnFiltActive : ''}`} 
                            onClick={() => {
                                setSelected('all')
                                setActiveBtn('all')
                            }}
                        >
                            All
                        </button>
                        <button 
                            className={`${styles.btnFilt} ${activeBtn === 'burger' ? styles.btnFiltActive : ''}`} 
                            onClick={() => {
                                setSelected('burger')
                                setActiveBtn('burger')
                            }}
                        >
                            Burgers
                        </button>
                        <button 
                            className={`${styles.btnFilt} ${activeBtn === 'snack' ? styles.btnFiltActive : ''}`} 
                            onClick={() => {
                                setSelected('snack')
                                setActiveBtn('snack')
                            }}
                        >
                            Snacks
                        </button>
                        <button 
                            className={`${styles.btnFilt} ${activeBtn === 'drink' ? styles.btnFiltActive : ''}`} 
                            onClick={() => {
                                setSelected('drink')
                                setActiveBtn('drink')
                            }}
                        >
                            Drinks
                        </button>
                        <button 
                            className={`${styles.btnFilt} ${activeBtn === 'sauce' ? styles.btnFiltActive : ''}`} 
                            onClick={() => {
                                setSelected('sauce')
                                setActiveBtn('sauce')
                            }}
                        >
                            Sauces
                        </button>
                        <button 
                            className={`${styles.btnFilt} ${activeBtn === 'other' ? styles.btnFiltActive : ''}`} 
                            onClick={() => {
                                setSelected('other')
                                setActiveBtn('other')
                            }}
                        >
                            Other
                        </button>
                    </div>

                    <div className={styles.products}>
                        {filteredProducts.map(product => (
                            <div key={product.id} className={styles.productCard}>
                                <img 
                                    src={product.img} 
                                    alt={product.title} 
                                    className={styles.productImage}
                                />
                                <h1 className={styles.productTitle}>
                                    {product.title}
                                </h1>
                                <h2 className={styles.productPrice}>
                                    {product.price} ₽
                                </h2>
                                {product.cal && (
                                    <p className={styles.productCal}>
                                        {product.cal} cal
                                    </p>
                                )}
                                {product.volume && (
                                    <p className={styles.productVolume}>
                                        {product.volume} ml
                                    </p>
                                )}
                                <img 
                                    src="/logo-cart.jpg" 
                                    alt="In cart" 
                                    className={styles.imgLogoCart}
                                    onClick={() => {addToCart(product)
                                        addProductInCart(true)
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Cart/>
        </div>
    )
}