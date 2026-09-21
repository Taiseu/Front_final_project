import { useState } from 'react'
import { homePageData } from '../data/productdata'
import { useCard } from '../context/useCard'

const { showcase } = homePageData

const filterOptions = ['All', 'Mirrorless', 'Cinema', 'Travel']

function ShopPage({ onSelectProduct, onShowMore, productLimit }) {
  const { addToCart, searchTerm } = useCard()
  const [selectedFilter, setSelectedFilter] = useState('All')
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const matchingProducts = showcase.filter((product) =>
    `${product.brand ?? ''} ${product.name} ${product.type}`.toLowerCase().includes(normalizedSearch)
      && (selectedFilter === 'All' || product.type === selectedFilter),
  )
  const visibleProducts = productLimit ? matchingProducts.slice(0, productLimit) : matchingProducts

  return (
    <div id="shop" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
            Shop
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">
            Explore cameras
          </h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              type="button"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                option === selectedFilter
                  ? 'border-white/20 bg-white text-slate-950'
                  : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 text-slate-200">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Category</p>
          <p className="mt-2 text-xl font-semibold text-white">Professional</p>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 text-slate-200">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Shipping</p>
          <p className="mt-2 text-xl font-semibold text-white">Free worldwide</p>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 text-slate-200">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Support</p>
          <p className="mt-2 text-xl font-semibold text-white">24/7 coverage</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product) => (
          <article
            key={product.name}
            className="group cursor-pointer overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/80 shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20"
            onClick={() => onSelectProduct(product)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelectProduct(product)
              }
            }}
            role="button"
            tabIndex="0"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80'
                }}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200 backdrop-blur-sm">
                {product.type}
              </span>
            </div>

            <div className="space-y-4 p-5 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  {product.brand && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">{product.brand}</p>}
                  <h3 className="text-2xl font-bold ">{product.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">For daily shoots</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Price</p>
                  <p className="mt-1 text-2xl font-bold">{product.price}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-1 text-amber-300 text-sm" aria-label="5 star rating">
                  ★★★★★
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                    onClick={(event) => {
                      event.stopPropagation()
                      onSelectProduct(product)
                    }}
                    type="button"
                  >
                    More details
                  </button>
                  <button
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    onClick={(event) => {
                      event.stopPropagation()
                      addToCart(product)
                    }}
                    type="button"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
        {productLimit && onShowMore && (
          <button
            className="group flex min-h-112 flex-col items-center justify-center rounded-[1.8rem] border border-amber-200/40 bg-amber-200/5 p-6 text-center transition hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-200/10"
            onClick={onShowMore}
            type="button"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-200/40 text-3xl text-amber-200 transition group-hover:scale-110" aria-hidden="true">
                    →
            </span>
            <span className="mt-5 text-2xl font-bold text-white">Show more</span>
            <span className="mt-2 text-sm text-slate-400">Explore the complete camera collection</span>
          </button>
        )}
      </div>

      {visibleProducts.length === 0 && (
        <p className="mt-8 text-center text-sm text-slate-400">No cameras match your search.</p>
      )}
    </div>
  )
}

export default ShopPage
