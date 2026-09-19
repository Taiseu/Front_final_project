import { homePageData } from '../data/productdata'

const { hero, brands, showcase } = homePageData

function HomePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">
      <main className="pt-8">
        <section className="grid items-center gap-8 pb-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:min-h-[440px]">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 max-w-[700px] text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.2rem]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-[620px] text-base leading-7 text-slate-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-8 flex gap-3 sm:gap-4">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" type="button">
                Shop camera
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10" type="button">
                Watch demo
              </button>
            </div>

            <div className="mt-8 space-y-2 text-sm text-slate-300">
              {hero.stats.map((item) => (
                <div key={item.label} className="text-left">
                  <span className="inline-block min-w-[120px] font-semibold text-white">{item.value}</span>
                  <span className="ml-1 text-slate-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-[320px] items-center justify-center md:h-[430px]">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <img
                src={showcase[0].image}
                alt={showcase[0].name}
                className="h-full w-full object-cover grayscale-[0.18]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur-sm">
                <small className="block text-[9px] uppercase tracking-[0.2em] text-slate-400">Available</small>
                <div className="mt-1 flex items-end gap-2">
                  <strong className="text-2xl font-bold text-white">24K</strong>
                  <span className="text-[10px] text-emerald-300">sold</span>
                </div>
              </div>

              <div className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur-sm">
                <div className="text-xs tracking-[0.3em] text-amber-300">★★★★★</div>
                <strong className="mt-1 block text-2xl font-bold text-white">4.9</strong>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
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
