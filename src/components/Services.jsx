import Reveal from './Reveal'

function BouquetIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
      <path d="M32 30 L20 54 M32 30 L32 56 M32 30 L44 54" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 46 Q32 40 46 46" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="16" r="7" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="44" cy="24" r="6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="16" r="1.8" fill="currentColor" />
      <circle cx="20" cy="24" r="1.6" fill="currentColor" />
      <circle cx="44" cy="24" r="1.6" fill="currentColor" />
    </svg>
  )
}

function ArrangementIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
      <path d="M24 40 L20 58 L44 58 L40 40 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M32 40 C 26 28, 30 20, 24 12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M32 40 C 34 26, 32 18, 36 10" stroke="currentColor" strokeWidth="1.4" />
      <path d="M32 40 C 40 30, 42 24, 46 18" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="36" cy="10" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="46" cy="18" r="3.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function DecorIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
      <path d="M8 30 C 8 14, 24 6, 32 6 C 40 6, 56 14, 56 30" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="30" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="54" cy="30" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="32" cy="6" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="44" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 34 L32 58" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
      <rect x="14" y="26" width="36" height="28" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 36 L50 36" stroke="currentColor" strokeWidth="1.6" />
      <path d="M32 26 L32 54" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M32 26 C 24 26, 22 14, 30 14 C 34 14, 34 22, 32 26 Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M32 26 C 40 26, 42 14, 34 14 C 30 14, 30 22, 32 26 Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

const SERVICES = [
  {
    icon: BouquetIcon,
    title: 'Bouquets',
    copy: 'Hand-tied bouquets in the shades and flowers you ask for — for someone waiting, or for no reason at all.',
  },
  {
    icon: ArrangementIcon,
    title: 'Arrangements',
    copy: 'Vase and box arrangements for a desk, a table, or a room that needs one good thing in it.',
  },
  {
    icon: DecorIcon,
    title: 'Decorations',
    copy: 'Flowers for weddings, homecomings, engagements and openings — arranged on-site or delivered ready to place.',
  },
  {
    icon: GiftIcon,
    title: 'Gift items',
    copy: 'Small gifts to send alongside the flowers — chocolates, cards, and keepsakes, wrapped together.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-paper-deep/60 px-6 py-28 md:px-10 lg:pl-32">
      <Reveal as="div" className="mx-auto max-w-5xl">
        <p className="text-xs tracking-label uppercase text-red">What we make</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl leading-snug text-ink sm:text-4xl">
          Four ways to say it with flowers.
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
        {SERVICES.map(({ icon: Icon, title, copy }, i) => (
          <Reveal
            key={title}
            delay={i * 90}
            className="group relative bg-paper p-9 transition-colors duration-500 hover:bg-white"
          >
            <div className="text-red/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-red">
              <Icon />
            </div>
            <h3 className="mt-6 font-display text-xl text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">{copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
