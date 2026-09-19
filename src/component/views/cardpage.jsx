import { homePageData } from '../data/productdata'
import { useCard } from '../context/cardContext'


const { showcase } = homePageData

function CardPage() {
  const { addToCart } = useCard()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
          Featured collection
        </p>
        <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">
          Built for creators.
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {showcase.map((product) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/80 shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200 backdrop-blur-sm">
                {product.type}
              </span>
            </div>

            <div className="space-y-4 p-5 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.05em]">{product.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">For daily shoots</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Price</p>
                  <p className="mt-1 text-2xl font-bold">{product.price}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-1 text-sm text-amber-300" aria-label="5 star rating">
                  ★★★★★
                </div>
                <button
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  onClick={() => addToCart(product)}
                  type="button"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default CardPage
