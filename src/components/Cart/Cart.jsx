import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import styles from './cart.module.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useAdress } from '../../contexts/AdressContext'

export default function Cart() {
    const {cart, clearCart, removeFromCart, totalPrice, productInCart, setProductInCart} = useCart()
    const {adress} = useAdress()
    const navigate = useNavigate()

    const handleBuy = () => {
        if (!adress?.Street || !adress.Building || !adress.Number) {
            setTimeout(() => navigate('/adress'), 0)
            return
        }
        setTimeout(() => navigate('/buy'), 0)
    }

    return (
        <div className={styles.cart}>
            <header className={styles.header}>
                <section className={styles.headerContent}>
                    <h1>Cart</h1>
                    <div className={styles.uiCart}>
                        <h2>Total: {totalPrice}</h2>
                        <div className={styles.uiBtn}>
                            <button disabled={!productInCart} className={styles.btnClear} onClick={() => clearCart()}>Clear</button>
                            <button 
                                disabled={!productInCart}
                                onClick={() => handleBuy()}
                                className={styles.uiLink}
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                    <main className={styles.main}>
                        <section className={styles.mainContent}>
                            {cart.map(product => (
                                <div key={product.id} className={styles.productCard}>
                                    
                                    <img src={`${product.img}`} alt={`${product.title}`} />
                                    <p>{product.title},</p>
                                    <p>{product.price} ₽,</p>
                                    <p>{product.quantity}</p>
                                    <img src="/logo-cart-remove.jpg" alt="remove" onClick={() => removeFromCart(product.id)} className={styles.cartLogo}/>
                                </div>
                            ))}
                        </section>
                    </main>
                </section>
            </header> 
        </div>
    )
}