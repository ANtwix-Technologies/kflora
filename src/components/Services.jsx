import Reveal from './Reveal'

const SERVICES = [
  {
    image: '/service/bouquets.png',
    title: 'Bouquets',
    copy: 'Hand-tied bouquets in the shades and flowers you ask for — for someone waiting, or for no reason at all.',
  },
  {
    image: '/service/arrangements.png',
    title: 'Arrangements',
    copy: 'Vase and box arrangements for a desk, a table, or a room that needs one good thing in it.',
  },
  {
    image: '/service/decorations.png',
    title: 'Decorations',
    copy: 'Flowers for weddings, homecomings, engagements and openings — arranged on-site or delivered ready to place.',
  },
  {
    image: '/service/gifts.png',
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
        {SERVICES.map(({ image, title, copy }, i) => (
          <Reveal
            key={title}
            delay={i * 90}
            className="group relative flex flex-col bg-paper transition-colors duration-500 hover:bg-white"
          >
            {/* Image at the top of the card */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Blurred fade at the base of the image, easing into the card content */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 backdrop-blur-md"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent, black)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-paper via-paper/60 to-transparent transition-colors duration-500 group-hover:from-white" />
            </div>

            <div className="p-9 pt-5">
              <h3 className="font-display text-xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}