import { homePageData } from '../data/productdata'

const { footer } = homePageData

function FooterPage() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-500 font-black text-slate-950">
              L
            </span>
            LensAura
          </div>
          <p className="mt-3 max-w-xs leading-7 text-slate-400">Premium imaging gear for creators who want sharp detail and powerful storytelling.</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Explore</p>
          <div className="mt-4 flex flex-col gap-3">
            {footer.links.map((link) => (
              <a href="#" key={link} className="transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Support</p>
          <div className="mt-4 space-y-3">
            <p>hello@lensaura.com</p>
            <p>+1 (800) 555-0198</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-slate-500">
        {footer.brand}
      </div>
    </footer>
  )
}

export default FooterPage
