import useReveal from '../hooks/useReveal'

/**
 * Wraps children in a fade/slide-up reveal that fires once the element
 * enters the viewport. `as` lets it render whichever tag the layout needs.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, variant = 'reveal' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
