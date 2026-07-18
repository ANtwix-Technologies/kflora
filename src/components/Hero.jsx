export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Full-bleed video backdrop */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-loop.mp4"
        poster="/images/kflora-logo.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Ivory tint over the footage so it reads as atmosphere, not a photo,
          and so the text in front of it stays legible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-paper/60 via-paper/35 to-paper/10"
      />
      <div aria-hidden="true" className="grain-bg absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10 lg:pl-24">
        <div
          className="max-w-xl opacity-0"
          style={{ animation: 'fade-up 1s 0.1s cubic-bezier(0.16,1,0.3,1) forwards' }}
        >
          <p className="mb-6 text-xs tracking-label uppercase text-red">Kandy Road, Kadawatha</p>
          <h1 className="font-display text-[2.6rem] leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Flowers, cut and
            <br />
            arranged <span className="italic text-red">the same morning.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-ink/70">
            KFlora is a small flower shop on Kandy Road — hand-tied bouquets, arrangements,
            event decor and gifts, put together by hand for Kadawatha and around it.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:+94702350583"
              className="rounded-full bg-red px-7 py-3.5 text-sm font-medium tracking-wide text-paper shadow-lg shadow-red/20 transition hover:bg-red-deep"
            >
              Call to order — 070 235 0583
            </a>
            <a
              href="#services"
              className="text-sm tracking-label uppercase text-ink/60 underline decoration-ink/20 underline-offset-4 transition hover:text-red hover:decoration-red"
            >
              See what we make
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/40 md:flex"
      >
        <span className="text-[0.65rem] tracking-label uppercase">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-ink/30" />
      </a>
    </section>
  )
}