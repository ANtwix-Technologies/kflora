import Reveal from './Reveal'

const PHOTOS = [
  {
    src: '/gallery/image1.png',
    alt: 'Hand-tied bouquet of peonies and roses',
    span: 'sm:row-span-2',
  },
  {
    src: '/gallery/image2.png',
    alt: 'Florist arranging fresh flowers on a work table',
  },
  {
    src: '/gallery/image3.png',
    alt: 'Box arrangement with pastel flowers',
  },
  {
    src: '/gallery/image4.png',
    alt: 'Flower shop interior with buckets of fresh stems',
    span: 'sm:col-span-2',
  },
  {
    src: '/gallery/image5.png',
    alt: 'Close-up of a single red rose',
  },
  {
    src: '/gallery/image6.jpeg',
    alt: 'Close-up of a single red rose',
  },
  {
    src: '/gallery/image7.png',
    alt: 'Close-up of a single red rose',
  },
  {
    src: '/gallery/image8.png',
    alt: 'Close-up of a single red rose',
  },
  {
    src: '/gallery/image9.png',
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

      <div className="mx-auto mt-12 max-w-5xl columns-2 gap-3 sm:columns-3">
  {PHOTOS.map((photo, i) => (
    <Reveal
      key={photo.alt}
      delay={i * 80}
      variant="bloom"
      className="mb-3 break-inside-avoid overflow-hidden rounded-xl"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="w-full transition duration-700 hover:scale-105"
      />
    </Reveal>
  ))}
</div>
    </section>
  )
}