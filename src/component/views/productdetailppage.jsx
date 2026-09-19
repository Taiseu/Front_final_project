import { useCard } from '../context/useCard'

function ProductDetailPage({ product, onClose, onAddToCart }) {
	const { addToCart } = useCard()

	if (!product) {
		return null
	}

	const typeDetails = {
		Mirrorless: 'A compact full-frame camera with fast autofocus and flexible controls for everyday creators.',
		Cinema: 'A production-ready camera built for cinematic video, dependable color, and long shooting days.',
		Travel: 'A lightweight camera designed to keep your best moments sharp wherever your next trip takes you.',
	}

	return (
		<section className="mb-10 overflow-hidden rounded-[2rem] border border-amber-300/20 bg-slate-900 shadow-[0_24px_70px_rgba(0,0,0,0.35)]" aria-label={`${product.name} details`}>
			<div className="grid md:grid-cols-[0.9fr_1.1fr]">
				<div className="relative min-h-72">
					<img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
					<span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-amber-200 backdrop-blur-sm">
						{product.type}
					</span>
				</div>

				<div className="p-6 sm:p-8">
					<div className="flex items-start justify-between gap-4">
						<div>
							<p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-200">Product details</p>
							{product.brand && <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{product.brand}</p>}
							<h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">{product.name}</h2>
						</div>
						<button
							className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
							onClick={onClose}
							type="button"
							aria-label="Back to shop"
							title="Back to shop"
						>
							&#8592;
						</button>
					</div>

					<p className="mt-5 leading-7 text-slate-300">{typeDetails[product.type]}</p>

					<div className="mt-6 grid gap-3 sm:grid-cols-3">
						<div className="rounded-xl border border-white/10 bg-white/5 p-3">
							<p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Category</p>
							<p className="mt-1 text-sm font-semibold text-white">{product.type}</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 p-3">
							<p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Rating</p>
							<p className="mt-1 text-sm font-semibold text-white">5.0 / 5</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 p-3">
							<p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Delivery</p>
							<p className="mt-1 text-sm font-semibold text-white">Free shipping</p>
						</div>
					</div>

					<div className="mt-7 flex flex-wrap items-center justify-between gap-4">
						<p className="text-3xl font-bold text-white">{product.price}</p>
						<button
							className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
							onClick={() => (onAddToCart || addToCart)(product)}
							type="button"
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductDetailPage
