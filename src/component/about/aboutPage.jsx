import { homePageData } from '../data/productdata'

const { brand, spotlight, reviews } = homePageData

function AboutPage() {
  return (
    <section id="about" className="border-t border-white/10 bg-slate-900/35 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
              About {brand}
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-[-0.06em] text-white sm:text-6xl">
              Tools that stay out of the way of the story.
            </h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end lg:text-lg">
            LensAura was created for photographers, filmmakers, and curious people who believe the best gear should feel powerful, intuitive, and ready for the moment before it arrives.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Our approach</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white">Designed around the person behind the camera.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              From balanced bodies to responsive autofocus, every LensAura detail is shaped around real creative work. We combine thoughtful engineering with cinematic image quality so your attention stays on light, people, and place.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Creator first', 'Built to last', 'Always curious'].map((value) => (
                <div key={value} className="border-l-2 border-amber-300 pl-3">
                  <p className="text-sm font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">A principle in every frame.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-300/15 to-orange-500/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">What drives us</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white">{spotlight.title}</h2>
            <ul className="mt-6 space-y-4">
              {spotlight.list.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <span className="mt-1 text-amber-300">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">From the community</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-white">Made for real creative work.</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-slate-300">“{review.quote}”</p>
                <footer className="mt-5 text-xs uppercase tracking-[0.16em] text-slate-400">
                  <span className="font-semibold text-white">{review.name}</span> · {review.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
