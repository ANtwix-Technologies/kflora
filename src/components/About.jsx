import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10 lg:pl-32">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr] md:gap-16">
        <Reveal className="md:sticky md:top-32 md:self-start">
          <p className="text-xs tracking-label uppercase text-red">About the shop</p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-3xl leading-snug text-ink sm:text-4xl">
            A neighbourhood shop, arranging by hand,
            <span className="italic text-red"> one order at a time.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
            KFlora sits on Kandy Road in Kadawatha. Every bouquet and arrangement is put
            together in-house rather than pulled off a shelf — flowers chosen for the
            occasion, cut, conditioned, and tied by hand before they leave the shop.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Whether it's a small bouquet to bring along, a table arrangement, flowers for a
            wedding or homecoming, or a gift to send with a note, we work from what you ask
            for and what's in season.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ['Bouquets', 'Hand-tied, any occasion'],
              ['Arrangements', 'Vase & box, for a room'],
              ['Decor', 'Weddings & events'],
              ['Gifts', 'Chocolates, cards & more'],
            ].map(([title, sub]) => (
              <div key={title} className="border-l-2 border-red/30 pl-3">
                <p className="font-display text-lg text-ink">{title}</p>
                <p className="mt-1 text-xs leading-snug text-ink/50">{sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
