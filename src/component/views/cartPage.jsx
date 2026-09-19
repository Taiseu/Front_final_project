import { useCard } from '../context/useCard'

function CartPage({ onClose }) {
	const { cartItems, removeFromCart } = useCard()
	const total = cartItems.reduce((sum, item) => {
		const price = Number(item.price.replace(/[^0-9.]/g, ''))
		return sum + price * item.quantity
	}, 0)

	return (
		<main className="mx-auto min-h-[60vh] max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
			<div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
				<div>
					<p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
						Your cart
					</p>
					<h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">Ready to capture more.</h1>
				</div>
				<button className="self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:self-auto" onClick={onClose} type="button">
					Continue shopping
				</button>
			</div>

			{cartItems.length === 0 ? (
				<div className="mt-10 rounded-[1.8rem] border border-dashed border-white/15 bg-white/[0.03] p-10 text-center">
					<p className="text-lg font-semibold text-white">Your cart is empty.</p>
					<p className="mt-2 text-sm text-slate-400">Add a camera from the shop to see it here.</p>
				</div>
			) : (
				<div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
					<div className="space-y-3">
						{cartItems.map((item) => (
							<article key={item.name} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
								<img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
								<div className="min-w-0 flex-1">
									<div className="flex items-start justify-between gap-3">
										<div>
											<p className="text-lg font-semibold text-white">{item.name}</p>
											<p className="mt-1 text-xs uppercase tracking-[0.16em] text-amber-200">{item.type}</p>
										</div>
										<p className="font-semibold text-white">{item.price}</p>
									</div>
									<div className="mt-4 flex items-center justify-between text-sm text-slate-400">
										<span>Quantity: {item.quantity}</span>
										<button className="text-rose-300 transition hover:text-rose-200" onClick={() => removeFromCart(item.name)} type="button">
											Remove
										</button>
									</div>
								</div>
							</article>
						))}
					</div>

					<aside className="h-fit rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
						<p className="text-xs uppercase tracking-[0.18em] text-slate-400">Order summary</p>
						<div className="mt-5 flex items-center justify-between text-sm text-slate-300">
							<span>Items</span>
							<span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
						</div>
						<div className="mt-3 flex items-center justify-between text-sm text-slate-300">
							<span>Shipping</span>
							<span className="text-emerald-300">Free</span>
						</div>
						<div className="my-5 border-t border-white/10" />
						<div className="flex items-center justify-between">
							<span className="font-semibold text-white">Total</span>
							<span className="text-2xl font-bold text-white">${total.toLocaleString()}</span>
						</div>
						<button className="mt-6 w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" type="button">
							Checkout
						</button>
					</aside>
				</div>
			)}
		</main>
	)
}

export default CartPage
