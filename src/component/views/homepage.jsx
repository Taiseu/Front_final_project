import { homePageData } from '../data/productdata'

const { hero, brands, showcase } = homePageData

function HomePage({ onNavigate }) {
  return (
    <div id="home" className="mx-auto max-w-360 px-5 py-6 sm:px-8 lg:px-12">
      <main className="pt-10">
        <section className="relative min-h-144 overflow-hidden rounded-4xl border border-white/10 bg-slate-900 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:min-h-168">
          <img
            src="https://iso.500px.com/wp-content/uploads/2023/01/By-Donghao-2.jpeg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/75 to-slate-950/15" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-slate-950/10" />

          <div className="relative z-10 flex min-h-144 max-w-3xl flex-col justify-center px-6 py-12 sm:min-h-168 sm:px-12 lg:px-16">
            <p className="inline-flex w-fit rounded-full border border-white/15 bg-slate-950/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200 backdrop-blur-sm">
              {hero.eyebrow}
            </p>

            <h1 className="mt-8 max-w-200 text-5xl font-black  text-white sm:text-6xl lg:text-[4.5rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-150 text-base leading-8 text-slate-200 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <button className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:bg-slate-200" onClick={() => onNavigate?.('Shop')} type="button">
                Shop camera
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
