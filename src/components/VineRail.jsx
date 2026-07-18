import { useMemo, useRef } from 'react'
import useScrollProgress from '../hooks/useScrollProgress'

const VIEW_HEIGHT = 1400

const STEM_PATH =
  'M78,8 C34,70 122,150 70,230 C22,300 128,380 66,455 C18,520 130,590 72,660 ' +
  'C24,725 126,795 68,865 C20,930 128,1000 74,1070 ' +
  'C28,1135 122,1205 70,1275 C34,1320 96,1360 76,1392'

// Branch points: alternating leaf sprigs down the stem, plus two blooms
// echoing the flower and laurel motifs from the KFlora mark.
const LEAVES = [
  { y: 120, x: 92, side: 1, rot: -18 },
  { y: 190, x: 44, side: -1, rot: 14 },
  { y: 340, x: 108, side: 1, rot: -10 },
  { y: 410, x: 34, side: -1, rot: 20 },
  { y: 560, x: 100, side: 1, rot: -16 },
  { y: 630, x: 30, side: -1, rot: 12 },
  { y: 780, x: 104, side: 1, rot: -14 },
  { y: 850, x: 32, side: -1, rot: 18 },
  { y: 990, x: 106, side: 1, rot: -12 },
  { y: 1060, x: 34, side: -1, rot: 16 },
  { y: 1200, x: 100, side: 1, rot: -14 },
  { y: 1270, x: 36, side: -1, rot: 18 },
]

const BLOOMS = [
  { y: 470, x: 66, scale: 1 },
  { y: 1000, x: 78, scale: 0.85 },
]

function Leaf({ x, y, side, rot, opacity }) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rot})`}
      style={{ opacity, transition: 'opacity 0.6s ease-out' }}
    >
      <path
        d={`M0,0 C${8 * side},-14 ${22 * side},-14 ${28 * side},0 C${22 * side},14 ${8 * side},14 0,0 Z`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d={`M0,0 L${20 * side},0`} stroke="currentColor" strokeWidth="1.2" />
    </g>
  )
}

function Bloom({ x, y, scale, opacity }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      style={{
        opacity,
        transformOrigin: `${x}px ${y}px`,
        transition: 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        transform: `translate(${x}px, ${y}px) scale(${opacity ? scale : scale * 0.6}) rotate(${opacity ? 0 : -10}deg)`,
      }}
    >
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy="-13"
          rx="7"
          ry="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r="4" fill="currentColor" opacity="0.9" />
    </g>
  )
}

/**
 * The signature scroll element: a hand-drawn botanical vine, echoing the
 * line-art growing through the K in the KFlora mark, that grows down a
 * fixed rail as the visitor scrolls the whole page and blooms at two points.
 */
export default function VineRail() {
  const progress = useScrollProgress()
  const pathRef = useRef(null)

  const pathLength = 2100 // approximate; dash values below are tuned to this

  const dashoffset = useMemo(() => pathLength * (1 - progress), [progress])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-2 top-0 z-10 hidden h-screen w-[110px] md:left-4 md:block lg:left-10"
    >
      <svg
        viewBox={`0 60 140 ${VIEW_HEIGHT}`}
        className="h-full w-full text-red"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={pathRef}
          d={STEM_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={dashoffset}
          style={{ transition: 'stroke-dashoffset 0.05s linear' }}
        />
        {LEAVES.map((leaf, i) => (
          <Leaf key={i} {...leaf} opacity={progress >= leaf.y / VIEW_HEIGHT ? 1 : 0} />
        ))}
        {BLOOMS.map((bloom, i) => (
          <Bloom key={i} {...bloom} opacity={progress >= bloom.y / VIEW_HEIGHT ? 1 : 0} />
        ))}
      </svg>
    </div>
  )
}
