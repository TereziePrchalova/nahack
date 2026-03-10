import { C } from '../styles/tokens'

export default function DnaHelix() {
  const rungs = Array.from({ length: 18 }, (_, i) => i)
  return (
    <svg
      viewBox="0 0 500 950"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute', right: -20, top: 50,
        width: '52%', height: '92%',
        opacity: 0.13, pointerEvents: 'none',
      }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="strandGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={C.cyan}  stopOpacity="0.9" />
          <stop offset="50%"  stopColor={C.teal}  stopOpacity="0.7" />
          <stop offset="100%" stopColor={C.cyan}  stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <g filter="url(#glow)" strokeWidth="1.5" fill="none">
        <path
          d="M250 0 Q340 52 250 104 Q160 156 250 208 Q340 260 250 312 Q160 364 250 416 Q340 468 250 520 Q160 572 250 624 Q340 676 250 728 Q160 780 250 832 Q340 884 250 936"
          stroke="url(#strandGrad)"
        />
        <path
          d="M250 0 Q160 52 250 104 Q340 156 250 208 Q160 260 250 312 Q340 364 250 416 Q160 468 250 520 Q340 572 250 624 Q160 676 250 728 Q340 780 250 832 Q160 884 250 936"
          stroke={C.teal} strokeOpacity="0.4"
        />
        {rungs.map(i => {
          const y    = 26 + i * 52
          const side = i % 2 === 0
          const x1   = side ? 312 : 188
          const x2   = side ? 188 : 312
          const col  = i % 3 === 0 ? C.acid : i % 3 === 1 ? C.cyan : C.teal
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke={C.cyanDim} strokeOpacity="0.4" />
              <circle cx={x1} cy={y} r="5" fill={col}    stroke="none" opacity="0.9" />
              <circle cx={x2} cy={y} r="4" fill={C.teal} stroke="none" opacity="0.5" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}
