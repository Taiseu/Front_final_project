import { useMemo, useState } from 'react'
import CardContext from './cardContextValue'

export function CardProvider({ children }) {
	const [cartItems, setCartItems] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	const [cartOpen, setCartOpen] = useState(false)

	function addToCart(product) {
		setCartItems((currentItems) => {
			const existingItem = currentItems.find((item) => item.name === product.name)

			if (existingItem) {
				return currentItems.map((item) =>
					item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item,
				)
			}

			return [...currentItems, { ...product, quantity: 1 }]
		})
	}

	function removeFromCart(productName) {
		setCartItems((currentItems) => currentItems.filter((item) => item.name !== productName))
	}

	const cartCount = useMemo(
		() => cartItems.reduce((total, item) => total + item.quantity, 0),
		[cartItems],
	)

	return (
		<CardContext.Provider value={{ addToCart, cartCount, cartItems, cartOpen, removeFromCart, searchTerm, setCartOpen, setSearchTerm }}>
			{children}
		</CardContext.Provider>
	)
}
