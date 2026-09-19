import { homePageData } from '../data/productdata'

const { hero, brands, showcase } = homePageData

function HomePage() {
  return (
    <div id="home" className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-12">
      <main className="pt-10">
        <section className="grid items-center gap-12 pb-12 md:grid-cols-[0.98fr_1.02fr] md:gap-14 lg:min-h-[620px]">
          <div>
            <p className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/[0.08] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200">
              {hero.eyebrow}
            </p>

            <h1 className="mt-7 max-w-[720px] text-5xl font-black leading-[0.91] tracking-[-0.065em] text-white sm:text-7xl lg:text-[6.25rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-[600px] text-base leading-8 text-slate-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <button className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:bg-slate-200" type="button">
                Shop camera
              </button>
              <button className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.09]" type="button">
                Watch demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
              {hero.stats.map((item) => (
                <div key={item.label} className="flex items-baseline gap-2 border-l border-white/15 pl-3">
                  <span className="font-bold text-white">{item.value}</span>
                  <span className="text-slate-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-[360px] items-center justify-center md:h-[530px]">
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-900 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <img
                src={showcase[0].image}
                alt={showcase[0].name}
                className="h-full w-full object-cover grayscale-[0.18]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-slate-950/75 px-5 py-3.5 backdrop-blur-md">
                <small className="block text-[9px] uppercase tracking-[0.2em] text-slate-400">Available</small>
                <div className="mt-1 flex items-end gap-2">
                  <strong className="text-2xl font-bold text-white">24K</strong>
                  <span className="text-[10px] text-emerald-300">sold</span>
                </div>
              </div>

              <div className="absolute right-5 top-5 rounded-2xl border border-white/10 bg-slate-950/75 px-5 py-3.5 backdrop-blur-md">
                <div className="text-xs tracking-[0.3em] text-amber-300">★★★★★</div>
                <strong className="mt-1 block text-2xl font-bold text-white">4.9</strong>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
          {brands.map((brandName) => (
            <span key={brandName} className="block">
              {brandName}
            </span>
          ))}
        </div>
      </main>
    </div>
  )
}

export default HomePage
