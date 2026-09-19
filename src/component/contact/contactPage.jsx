import { useState } from 'react'

const contactChannels = [
  { label: 'General questions', value: 'hello@lensaura.com' },
  { label: 'Orders and returns', value: 'orders@lensaura.com' },
  { label: 'Studio visits', value: 'studio@lensaura.com' },
]

function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
            Contact LensAura
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            Let&apos;s make something worth remembering.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
            Whether you are choosing your first camera or building a complete production kit, our team is ready to help you find the right setup.
          </p>

          <div className="mt-10 space-y-3">
            {contactChannels.map((channel) => (
              <div key={channel.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{channel.label}</p>
                <p className="mt-2 font-semibold text-white">{channel.value}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8" onSubmit={handleSubmit}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Start a conversation</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white">Tell us about your next project.</h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              Name
              <input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-300/60" />
            </label>
            <label className="text-sm text-slate-300">
              Email
              <input required name="email" type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-300/60" />
            </label>
          </div>

          <label className="mt-4 block text-sm text-slate-300">
            Topic
            <select name="topic" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-amber-300/60">
              <option>Choosing a camera</option>
              <option>Order support</option>
              <option>Partnerships</option>
              <option>Something else</option>
            </select>
          </label>

          <label className="mt-4 block text-sm text-slate-300">
            Message
            <textarea required name="message" rows="6" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-300/60" />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" type="submit">
              Send message
            </button>
            {sent && <p className="text-sm text-emerald-300">Message received. We&apos;ll be in touch soon.</p>}
          </div>
        </form>
      </div>
    </main>
  )
}

export default ContactPage
