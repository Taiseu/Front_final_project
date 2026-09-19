import { homePageData } from '../data/productdata'
import { useCard } from '../context/cardContext'

const { brand, navItems, showcase } = homePageData

function NavbarPage() {
  const { addToCart, cartCount, searchTerm, setSearchTerm } = useCard()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-500 font-black text-slate-950">
            L
          </span>
          {brand}
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
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
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:bg-white/10"
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
          <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10" type="button">
            Log in
          </button>
          <button
            className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            onClick={() => addToCart(showcase[0])}
            type="button"
          >
            Buy now
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavbarPage
