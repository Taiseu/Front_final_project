import { useState } from 'react'

function RegisterPage({ onBack, onLogin }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 p-7 sm:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Join Astra Camera</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.06em] text-white">Build your camera setup with confidence.</h1>
            <p className="mt-5 text-sm leading-7 text-slate-300">Create an account to save products, track orders, and get helpful recommendations for your next shoot.</p>
          </div>
          <p className="mt-12 text-xs uppercase tracking-[0.18em] text-slate-400">Astra Camera creator shop</p>
        </div>

        <form className="bg-slate-950/60 p-7 sm:p-9" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Create account</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white">Register</h2>
            </div>
            <button className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white" onClick={onBack} type="button">
              Back
            </button>
          </div>

          <label className="mt-8 block text-sm text-slate-300">
            Full name
            <input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30" />
          </label>

          <label className="mt-4 block text-sm text-slate-300">
            Email address
            <input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30" />
          </label>

          <label className="mt-4 block text-sm text-slate-300">
            Password
            <input required type="password" name="password" minLength="6" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30" />
          </label>

          <button className="mt-7 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" type="submit">
            Create account
          </button>
          {submitted && <p className="mt-4 text-center text-sm text-emerald-300">Demo account created successfully.</p>}
          <p className="mt-5 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <button className="font-semibold text-white transition hover:text-amber-200" onClick={onLogin} type="button">
              Log in
            </button>
          </p>
        </form>
      </section>
    </main>
  )
}

export default RegisterPage
