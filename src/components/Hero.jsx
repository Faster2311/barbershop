import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { CLIENT } from '../data/client'

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-h="kicker"]', { y: 18, opacity: 0, duration: 0.6 })
        .from('[data-h="line"]', { scaleX: 0, transformOrigin: 'left', duration: 0.7 }, '-=0.4')
        .from('[data-h="title-line"]', { y: 60, opacity: 0, duration: 0.9, stagger: 0.08 }, '-=0.3')
        .from('[data-h="lede"]', { y: 22, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('[data-h="cta"]', { y: 14, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('[data-h="meta"]', { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.5')
        .from('[data-h="visual"]', { y: 40, opacity: 0, duration: 1, ease: 'power2.out' }, 0.1)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative bg-ink-800 pt-24 md:pt-28 overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-12 pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div className="lg:col-span-7 relative z-10 max-w-2xl">
          <p data-h="kicker" className="eyebrow flex items-center gap-3 mb-7">
            <span className="inline-block w-8 h-px bg-brass" data-h="line" />
            <span>{CLIENT.city} · з 2018 року</span>
          </p>

          <h1 className="font-serif font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-bone leading-[0.98] tracking-tight">
            <span data-h="title-line" className="block">Стрижка,</span>
            <span data-h="title-line" className="block italic text-brass">борода,</span>
            <span data-h="title-line" className="block">гоління.</span>
          </h1>

          <p data-h="lede" className="mt-8 text-bone-dim text-lg md:text-xl leading-relaxed max-w-xl text-pretty">
            Чоловічий простір на Михайлівській. Стрижемо так, як стригли б собі — без поспіху, без шаблонів, без нав'язування.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={CLIENT.telegram} target="_blank" rel="noopener noreferrer" data-h="cta" className="btn-brass">
              Записатись у Telegram
            </a>
            <a href={`tel:${CLIENT.phoneRaw}`} data-h="cta" className="btn-outline">
              {CLIENT.phone}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-5 max-w-md">
            <div data-h="meta">
              <p className="font-serif text-3xl text-brass leading-none">-20%</p>
              <p className="text-[11px] uppercase tracking-widest text-bone-dim mt-2">перший візит</p>
            </div>
            <div data-h="meta">
              <p className="font-serif text-3xl text-brass leading-none">365</p>
              <p className="text-[11px] uppercase tracking-widest text-bone-dim mt-2">днів на рік</p>
            </div>
            <div data-h="meta">
              <p className="font-serif text-3xl text-brass leading-none">7</p>
              <p className="text-[11px] uppercase tracking-widest text-bone-dim mt-2">років у місті</p>
            </div>
          </div>
        </div>

        <div data-h="visual" className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}photos/pixabay_1007891.jpg`}
              alt="Інтер'єр Barbershop Blade у Житомирі"
              className="absolute inset-0 w-full h-full object-cover"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-800/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest-2 text-brass mb-1">№ 14</p>
                <p className="font-serif text-bone text-2xl leading-tight">вул. Михайлівська</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[11px] uppercase tracking-widest-2 text-brass mb-1">години</p>
                <p className="font-serif text-bone text-2xl leading-tight">10 — 22</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 w-24 h-24 bg-brass text-ink-800 rounded-full grid place-items-center text-center shadow-2xl shadow-black/40 hidden md:grid">
            <div>
              <p className="font-serif text-3xl leading-none">-20%</p>
              <p className="text-[9px] uppercase tracking-widest-2 mt-1">перший візит</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-brass/15 bg-ink overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 text-bone-dim font-serif text-2xl italic">
              <span>Класична стрижка</span>
              <span className="text-brass">·</span>
              <span>Корекція бороди</span>
              <span className="text-brass">·</span>
              <span>Королівське гоління</span>
              <span className="text-brass">·</span>
              <span>Стрижка + борода</span>
              <span className="text-brass">·</span>
              <span>Дитяча стрижка</span>
              <span className="text-brass">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
