import Reveal from './Reveal'

const MAP_SRC =
  'https://maps.google.com/maps?q=' +
  encodeURIComponent('584/5 Kandy Rd, Kadawatha') +
  '&t=&z=15&ie=UTF8&iwloc=&output=embed'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M15 8.5h2V5.2c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.85 1.75-4.85 4.97V13H6.5v3.6h3.75V23h3.7v-6.4h3.6l.55-3.6h-4.15v-2.6c0-1.05.3-1.9 1.05-1.9Z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5c.34 0 .68.04 1 .12" />
      <path d="M14 4c.4 2.3 2 4 4.5 4.2" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="visit" className="relative bg-ink px-6 py-28 text-paper md:px-10 lg:pl-32">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-label uppercase text-blush">Visit or call ahead</p>
          <h2 className="mt-3 font-display text-3xl leading-snug sm:text-4xl">
            Kandy Road, <span className="italic text-blush">Kadawatha.</span>
          </h2>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="tracking-label uppercase text-paper/40">Address</dt>
              <dd className="mt-1.5 text-base text-paper/90">584/5 Kandy Rd, Kadawatha</dd>
            </div>
            <div>
              <dt className="tracking-label uppercase text-paper/40">Phone</dt>
              <dd className="mt-1.5">
                <a href="tel:+94702350583" className="text-base text-paper/90 hover:text-blush">
                  070 235 0583
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex gap-3">
            <a
              href="https://web.facebook.com/p/K-flora-100064162116448/?_rdc=1&_rdr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm transition hover:border-blush hover:text-blush"
            >
              <FacebookIcon /> Facebook
            </a>
            <a
              href="https://www.tiktok.com/@kflora_kadawatha"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm transition hover:border-blush hover:text-blush"
            >
              <TikTokIcon /> TikTok
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="h-72 overflow-hidden rounded-2xl border border-paper/10 sm:h-full">
          <iframe
            title="KFlora location on Kandy Road, Kadawatha"
            src={MAP_SRC}
            className="h-full w-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
