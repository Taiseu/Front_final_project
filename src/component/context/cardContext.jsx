import { createContext, useContext, useMemo, useState } from 'react'

const CardContext = createContext(null)

export function CardProvider({ children }) {
	const [cartItems, setCartItems] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

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

	const cartCount = useMemo(
		() => cartItems.reduce((total, item) => total + item.quantity, 0),
		[cartItems],
	)

	return (
		<CardContext.Provider value={{ addToCart, cartCount, cartItems, searchTerm, setSearchTerm }}>
			{children}
		</CardContext.Provider>
	)
}

export function useCard() {
	const context = useContext(CardContext)

	if (!context) {
		throw new Error('useCard must be used inside CardProvider')
	}

	return context
}
