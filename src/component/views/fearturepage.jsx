import { homePageData } from '../data/productdata'

const { features } = homePageData

function FeaturePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[20px] font-medium uppercase tracking-[0.22em] text-amber-200">
          Why choose us
        </p>
        <h1 className="mt-6 text-4xl font-black text-white sm:text-5xl">
          Built for the moments that matter.
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[1.8rem] border border-white/10 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">{feature.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{feature.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default FeaturePage
