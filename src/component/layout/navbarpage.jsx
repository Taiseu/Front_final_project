import { useState } from 'react'
import { homePageData } from '../data/productdata'
import { useCard } from '../context/useCard'
import logoImage from './ChatGPT Image Aug 7, 2026, 03_22_24 PM.png'

const { brand, navItems } = homePageData

function NavbarPage({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount, cartItems, cartOpen, searchTerm, setCartOpen, setSearchTerm } = useCard()
  const cartTotal = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9.]/g, ''))
    return sum + price * item.quantity
  }, 0)

  function handleBuyNow() {
    if (cartItems.length === 0) {
      window.alert('Your cart is empty. Add a camera before checkout.')
      return
    }

    window.alert(`Checkout started. Your order total is $${cartTotal.toLocaleString()}.`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="min-w-0 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-white">
          <img
            src={logoImage}
            alt={`${brand} logo`}
            className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/15"
          />
          <span className="truncate">{brand}</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item}
              className="transition hover:text-white"
              onClick={() => onNavigate(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <label className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 md:flex">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search cameras"
              className="w-28 bg-transparent text-white outline-none placeholder:text-slate-500 lg:w-36"
            />
          </label>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:bg-white/10"
            onClick={() => setCartOpen(!cartOpen)}
            type="button"
            aria-label={`Shopping cart with ${cartCount} items`}
            title="Shopping cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-300 px-1 text-[10px] font-bold text-slate-950">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:block"
            onClick={() => onNavigate('Login')}
            type="button"
          >
            Log in
          </button>
          <button
            className="hidden rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200 sm:block"
            onClick={handleBuyNow}
            type="button"
          >
            Buy now
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-4 lg:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              className="rounded-xl px-3 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
              onClick={() => {
                onNavigate(item)
                setMobileMenuOpen(false)
              }}
              type="button"
            >
              {item}
            </button>
          ))}
          <label className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-300">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search cameras"
              className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-slate-500"
            />
          </label>
        </div>
      )}
    </header>
  )
}

export default NavbarPage
