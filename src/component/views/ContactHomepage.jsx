import { useState } from 'react'

function ContactHomepage() {
	const [sent, setSent] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()
		setSent(true)
	}

	return (
		<section id="contact-home" className="border-y  border-white/10 bg-slate-900/40 px-4 py-16 sm:px-6 lg:px-8 rounded-[2.5rem]">
			<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<div className="flex flex-col justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">Contact the studio</p>
						<h2 className="mt-3 max-w-xl text-xl font-black  tracking-tighter text-white sm:text-5xl">
							Bring your next frame into focus.
						</h2>
						<p className="mt-6 max-w-md text-base leading-8 text-slate-300">
							Tell us what you are making, where you are going, and what you need from your kit. We will help you find the right starting point.
						</p>
					</div>

					<div className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-16 lg:grid-cols-1">
						{[
							['Email', 'welcometo@astracamera.com'],
							['Phone', '+855 16 986 573'],
							['Studio', 'Toul Kork, Phnom Penh'],
						].map(([label, value]) => (
							<div key={label} className="border-l border-amber-200/60 pl-4">
								<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
								<p className="mt-2 text-sm font-semibold text-white">{value}</p>
							</div>
						))}
					</div>
				</div>

				<form className="rounded-3xl border border-white/10 bg-slate-950/70 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8" onSubmit={handleSubmit}>
					<div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
						<div>
							<p className="text-xs uppercase tracking-[0.2em] text-slate-500">Start a conversation</p>
							<h3 className="mt-2 text-2xl font-bold text-white">What are you working on?</h3>
						</div>
						<span className="text-3xl text-amber-200" aria-hidden="true">↗</span>
					</div>

					<div className="mt-6 grid gap-4 sm:grid-cols-2">
						<label className="text-sm text-slate-300">
							Name
							<input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-200/60" />
						</label>
						<label className="text-sm text-slate-300">
							Email
							<input required name="email" type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-200/60" />
						</label>
					</div>

					<label className="mt-4 block text-sm text-slate-300">
						Message
						<textarea required name="message" rows="5" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-200/60" />
					</label>

					<div className="mt-6 flex flex-wrap items-center gap-4">
						<button className="rounded-full bg-amber-200 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-100" type="submit">
							Send Message
						</button>
						{sent && <p className="text-sm text-emerald-300">Thanks. We&apos;ll be in touch soon.</p>}
					</div>
				</form>
			</div>
		</section>
	)
}

export default ContactHomepage
