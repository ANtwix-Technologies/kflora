import Reveal from './Reveal'

// Placeholder photography — swap these for real KFlora product photos
// whenever they're ready. Filenames describe what each should show.
const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=70',
    alt: 'Hand-tied bouquet of peonies and roses',
    span: 'sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?auto=format&fit=crop&w=800&q=70',
    alt: 'Florist arranging fresh flowers on a work table',
  },
  {
    src: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=70',
    alt: 'Box arrangement with pastel flowers',
  },
  {
    src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=70',
    alt: 'Flower shop interior with buckets of fresh stems',
    span: 'sm:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=800&q=70',
    alt: 'Close-up of a single red rose',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-28 md:px-10 lg:pl-32">
      <Reveal as="div" className="mx-auto max-w-5xl">
        <p className="text-xs tracking-label uppercase text-red">From the shop</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl leading-snug text-ink sm:text-4xl">
          A little of what leaves the counter.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3">
        {PHOTOS.map((photo, i) => (
          <Reveal
            key={photo.alt}
            delay={i * 80}
            variant="bloom"
            className={`overflow-hidden rounded-xl ${photo.span || ''}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale-[8%] transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-5xl text-xs text-ink/40">
        Placeholder photography shown above — swap in real KFlora shots any time.
      </p>
    </section>
  )
}
