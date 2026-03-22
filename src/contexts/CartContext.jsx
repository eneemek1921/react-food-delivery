import { act, createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext();
const CART_STORAGE_KEY = 'food-cart'

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existing = state.find(item => item.id === action.payload.id)
            if (existing) {
                if (existing.quantity >= 99) {
                    return state;
                }
                return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item)
            }
            
            return [...state, {...action.payload, quantity: 1}]
        } 
        
        case 'REMOVE_FROM_CART': 
            const existing = state.find(item => item.id === action.payload)
            if (existing.quantity === 1) {
                return state.filter(item => item.id !== action.payload )
            }
            return state.map(item => item.id === action.payload ? {...item, quantity:item.quantity - 1} : item)

        case 'CLEAR_CART':
            return []

        default:
            return state
    }
}

export default function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart), [cart])
    })

    const [productInCart, setProductInCart] = useState(false)

    const addToCart = (product) => {
        dispatch({type: 'ADD_TO_CART', payload: product})
    }

    const removeFromCart = (id) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: id})
    }

    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }

    const addProductInCart = () => {
        setProductInCart(true)
    }

    const totalPrice = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart, 
            removeFromCart,
            clearCart,
            totalPrice,
            addProductInCart,
            productInCart
        }}>
            {children}
        </CartContext.Provider>
    )
} 

export function useCart() {
    return useContext(CartContext)
}