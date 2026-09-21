import { useMemo, useState } from 'react'
import { useCard } from '../context/useCard'

const accessories = [
  {
    name: 'AstraPrime 35mm Lens',
    type: 'Lens',
    price: '$649',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSLEu4rHaiM6_lo5Ge9NdMY8jnk6V7euQ8chnATjaAu7KebFdh4ArawY&s=10',
  },
  {
    name: 'Carbon Tripod Pro',
    type: 'Support gear',
    price: '$189',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdg90dHUo5PksGehmf1puZ4Dtep_qOx1xkIWiVzmthry4X4NojsfVA_wk&s=10',
  },
  {
    name: 'Creator Camera Bag',
    type: 'Carry gear',
    price: '$129',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPddZ0sPEQBoKuNxSpBKxBO72vtJ48wvugkp2HqGj88UQvSIVguZae94&s=10',
  },
  {
    name: 'Pro Speedlight 400',
    type: 'Lighting',
    price: '$249',
    image: 'https://strobepro.com/cdn/shop/files/Strobepro_Godox_AD400_Pro_II_TTL_HSS_Battery_Strobe_1600x.jpg?v=1755799176',
  },
  {
    name: '128GB V90 Memory Card',
    type: 'Storage',
    price: '$79',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0qQQ--jZBz6ab-QKfoH_ALpyXCJvz-s3_txaj5YVXQtYPgCkxXc5bq0&s=10',
  },
  {
    name: 'AstraPrime 85mm Lens',
    type: 'Lens',
    price: '$899',
    image: 'https://www.firstlightoptics.com/user/products/astrhori_af85mm_f18a.jpg',
  },
  {
    name: 'AstraPrime 24mm Lens',
    type: 'Lens',
    price: '$729',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHfsR5ORf8oBkvvBxj717hcjN_vOoEV1G6SRiybDg0w&s=10',
  },
  {
    name: 'AstraPrime 50mm Lens',
    type: 'Lens',
    price: '$579',
    image: 'https://m.media-amazon.com/images/I/619vGkBO3zL.jpg',
  },
  {
    name: 'AstraPrime 70-200mm Lens',
    type: 'Lens',
    price: '$1,499',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2f_LTbUHtgaCIAHlGYOa0ZNvwqYeCaWs9CKcy0ZlzfDzsrFfciGNMum4&s=10',
  },
  {
    name: 'AstraPrime 100mm Macro Lens',
    type: 'Lens',
    price: '$999',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDFcj5xSTIWKQUeqW2ym9tMZ4HTtrKg3cMt3YmQccc1S25SyUFE7T0OaO&s=10',
  },
  {
    name: 'Compact Travel Tripod',
    type: 'Support gear',
    price: '$119',
    image: 'https://fotoprostore.com/cdn/shop/files/mini-carbon-fiber-tripod-lightweight-compact-travel-tripod-with-3600-ball-head-qr-plate-max-load-11lbs-black-864803.jpg?v=1735461188',
  },
  {
    name: 'Studio Tripod Head',
    type: 'Support gear',
    price: '$159',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyhW2N9pdXHwkZiLSi_FJ1y0u1Cy_j3Tf0TZnAaiQpZ-6jk0u1f5hmPM&s=10',
  },
  {
    name: 'Quick Release Plate',
    type: 'Support gear',
    price: '$39',
    image: 'https://firstcall-photographic.co.uk/cdn/shop/files/MANF552_1_700x700.png?v=1765328086',
  },
  {
    name: 'Camera Wrist Strap',
    type: 'Carry gear',
    price: '$29',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBmc5AWpmoV5ophsIAJWMxtcO1eRtMvqt1-wqXWgBAFStIQbrHJ8hnrhV&s=10',
  },
  {
    name: 'Weatherproof Sling Bag',
    type: 'Carry gear',
    price: '$149',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-g6R8lO9yO7A7a26IKLmn26j8DoKgJLMJQEAcZhT75-u1mB_SGse706s&s=10',
  },
  {
    name: 'Dual Battery Backpack',
    type: 'Carry gear',
    price: '$179',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0rhRZnP9USCfdCOgEo5jEtYkWHSxmw6PrBWd1ydrMg&s=10',
  },
  {
    name: 'LED Panel Light 60',
    type: 'Lighting',
    price: '$199',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUl6aInGvoxUjNei9AQnN3JMp8m8U4ryXmHOZ5UCwQ3VdoWV5JPYEbwXo&s=10',
  },
  {
    name: 'Pocket LED Light',
    type: 'Lighting',
    price: '$89',
    image: 'https://m.media-amazon.com/images/I/610Nu9Ne11L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    name: 'Softbox Duo Kit',
    type: 'Lighting',
    price: '$299',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAV7egNjJdIJV9h8zbYbvx24sl8dUupTwnPq_q3DG-hxLeAJgt7J0Rc5I&s=10',
  },
  {
    name: 'Reflector 5-in-1',
    type: 'Lighting',
    price: '$59',
    image: 'https://www.laorlaorcamerashop.com/Content/Upload/ItemImage/d224bbcf-457d-4d08-9dc1-d51a7d83e61a.jpg',
  },
  {
    name: '256GB V90 Memory Card',
    type: 'Storage',
    price: '$149',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3_94eH0w8R4xL6DbfgnQilty-2FwjVEGYt6rq3rm5g&s=10',
  },
  {
    name: 'Portable SSD 1TB',
    type: 'Storage',
    price: '$119',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov_P-EapINULlS-1ntFj-Pfi2vzyFYcx4LH12pnGcwKSG2ZMjYhHv1SY&s=10',
  },
  {
    name: 'Memory Card Case',
    type: 'Storage',
    price: '$24',
    image: 'https://www.sandisk.com/content/dam/store/en-us/assets/products/accessories/sandisk-sd-card-case/gallery/sandisk-sd-card-case-with-card.png.wdthumb.1280.1280.png',
  },
  {
    name: 'USB-C Card Reader',
    type: 'Storage',
    price: '$35',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1AVP-SyzCxprovxfobWxI_17dBgcBOYZHI-kwXd3qH4mAM56hHlZXh0&s=10',
  },
  {
    name: 'Wireless Shotgun Microphone',
    type: 'Audio',
    price: '$229',
    image: 'https://www.comica-audio.com/upload/202406/28/202406281610035657.jpg',
  },
  {
    name: 'Compact Camera Microphone',
    type: 'Audio',
    price: '$99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pnVAOR73d1tavSq0L-NsdIpfx7M1UK9CLr-n1emO5HFPLUn-OuOFb1M&s=10',
  },
  {
    name: 'Wireless Lavalier Set',
    type: 'Audio',
    price: '$179',
    image: 'https://img.kentfaith.com/cache/catalog/products/us/GW53.0108/GW53.0108-1-518x518.jpg',
  },
  {
    name: 'Astra Battery Pack',
    type: 'Power',
    price: '$89',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2zWgmgGCN0-8POgHK_6gVACvJdPvoTJAnXjn9zUj4g&s=10',
  },
  {
    name: 'Dual Battery Charger',
    type: 'Power',
    price: '$69',
    image: 'https://m.media-amazon.com/images/I/41r4OxboAFL._AC_UF894,1000_QL80_.jpg',
  },
]

function AccessoriesPage() {
  const { addToCart } = useCard()
  const [selectedType, setSelectedType] = useState('All')
  const types = ['All', ...new Set(accessories.map((accessory) => accessory.type))]
  const visibleAccessories = useMemo(
    () => selectedType === 'All' ? accessories : accessories.filter((accessory) => accessory.type === selectedType),
    [selectedType],
  )

  return (
    <main id="accessories" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/80 px-6 py-10 sm:px-10 sm:py-14">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5da0b708cf23393c2aa2a5ef/686716b7-1a5d-4c0c-8812-b3f6f1773e29/218325688_1403685860030331_6562942827105967623_n.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 max-w-2xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">Astra accessories</p>
          <h1 className="mt-6 text-5xl font-black leading-[0.94]  text-white sm:text-7xl">The details make the frame.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Build a lighter, sharper, more capable camera setup with lenses and essentials selected for real creative work.</p>
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20" />
      </section>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ['01', 'Curated gear', 'Only essentials that earn space in your bag.'],
          ['02', 'Fast dispatch', 'Free shipping on every accessory order.'],
          ['03', 'Made to pair', 'Designed to work naturally with your camera.'],
        ].map(([number, title, text]) => (
          <div key={number} className="border border-white/10 p-4 rounded-[1.6rem] bg-slate-950/60">
            <p className="text-xs font-semibold tracking-[0.18em] text-amber-200">{number}</p>
            <p className="mt-3 font-semibold text-white">{title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Shop the kit</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Essentials for every shoot.</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button key={type} onClick={() => setSelectedType(type)} type="button" className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${selectedType === type ? 'border-white/20 bg-white text-slate-950' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}>
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleAccessories.map((accessory) => (
          <article key={accessory.name} className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-white/20">
            <div className="relative h-60 overflow-hidden bg-slate-800">
              <img src={accessory.image} alt={accessory.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200 backdrop-blur-sm">{accessory.type}</span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold tracking-[-0.04em] text-white">{accessory.name}</h3>
                <p className="shrink-0 text-lg font-bold text-white">{accessory.price}</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">Reliable gear for sharper, steadier, more intentional images.</p>
              <button className="mt-5 w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" onClick={() => addToCart(accessory)} type="button">
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default AccessoriesPage
