import { useState } from 'react'

const supportTopics = [
  {
    title: 'Orders and delivery',
    text: 'Track an order, update delivery details, or learn about free worldwide shipping.',
  },
  {
    title: 'Camera setup',
    text: 'Get help with autofocus, stabilization, low-light settings, and your first shoot.',
  },
  {
    title: 'Returns and warranty',
    text: 'Our support team can guide you through returns, repairs, and product coverage.',
  },
]

function SupportPage() {
  const [messageSent, setMessageSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setMessageSent(true)
  }

  return (
    <main id="support" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
            Support
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            Help for every frame.
          </h1>
        </div>
        <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end lg:text-lg">
          Get practical answers from people who understand cameras, creative workflows, and the small details that make a shoot feel effortless.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email us</p>
          <p className="mt-3 font-semibold text-white">hello@lensaura.com</p>
          <p className="mt-2 text-sm text-slate-400">Replies within one business day.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Call us</p>
          <p className="mt-3 font-semibold text-white">+1 (800) 555-0198</p>
          <p className="mt-2 text-sm text-slate-400">Monday to Friday, 9am to 6pm.</p>
        </div>
        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Response time</p>
          <p className="mt-3 font-semibold text-white">Under 24 hours</p>
          <p className="mt-2 text-sm text-slate-300">For urgent order questions.</p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Popular topics</p>
          <div className="mt-5 space-y-3">
            {supportTopics.map((topic) => (
              <article key={topic.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h2 className="font-semibold text-white">{topic.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{topic.text}</p>
              </article>
            ))}
          </div>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 sm:p-8" onSubmit={handleSubmit}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Send a message</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white">Tell us what you need.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              Name
              <input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-300/60" />
            </label>
            <label className="text-sm text-slate-300">
              Email
              <input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-300/60" />
            </label>
          </div>
          <label className="mt-4 block text-sm text-slate-300">
            How can we help?
            <textarea required name="message" rows="5" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-amber-300/60" />
          </label>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" type="submit">
              Send message
            </button>
            {messageSent && <p className="text-sm text-emerald-300">Thanks. We will get back to you soon.</p>}
          </div>
        </form>
      </div>
    </main>
  )
}

export default SupportPage
