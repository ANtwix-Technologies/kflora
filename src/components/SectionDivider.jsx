/**
 * A small botanical sprig used between sections instead of a plain hairline —
 * a quieter echo of the vine motif, used sparingly.
 */
export default function SectionDivider({ flip = false }) {
  return (
    <div className={`flex justify-center py-2 text-red/50 ${flip ? 'rotate-180' : ''}`}>
      <svg width="120" height="28" viewBox="0 0 120 28" fill="none">
        <path d="M2 14 C30 4, 90 24, 118 14" stroke="currentColor" strokeWidth="1.4" />
        <path d="M60 14 C55 6, 45 6, 40 14 C45 22, 55 22, 60 14 Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M60 14 C65 6, 75 6, 80 14 C75 22, 65 22, 60 14 Z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="60" cy="14" r="2.4" fill="currentColor" />
      </svg>
    </div>
  )
}
