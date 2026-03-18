import { useState } from 'react'
import { C } from '../styles/tokens'
import { useReveal } from '../hooks'
import { SectionTag, SectionTitle } from './UI'

const ITEMS = [
  'A runnable prototype workflow,',
  'Documented format/specification examples',
  'benchmarking outputs',
  'shared repository materials',
]

export default function Outcomes() {
  const ref = useReveal()
  return (
    <section style={sectionStyle}>
      <SectionTag>Expected outcomes</SectionTag>
      <SectionTitle>
        WHAT WE'LL<br />
        <span style={{ color: C.cyan }}>PRODUCE</span>
      </SectionTitle>
      <div className="reveal" ref={ref} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 2,
      }}>
        {ITEMS.map((item, i) => <OutcomeCard key={i} item={item} />)}
      </div>
    </section>
  )
}

function OutcomeCard({ item }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 'clamp(20px,2.5vw,32px) clamp(20px,2.5vw,40px)',
        border: `1px solid ${hovered ? C.borderHi : C.border}`,
        background: hovered ? C.cyanDark : C.bg2,
        display: 'flex', gap: 18, alignItems: 'flex-start',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <div style={{
        width: 26, height: 26,
        border: `1px solid ${hovered ? C.cyan : C.cyanDim}`,
        borderRadius: '50%', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 2,
        transition: 'border-color 0.3s',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke={hovered ? C.cyan : C.cyanDim} strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p style={{ fontSize: 'clamp(13px,1.3vw,15px)', lineHeight: 1.65, color: hovered ? C.white : C.mutedLight, transition: 'color 0.3s' }}>
        {item}
      </p>
    </div>
  )
}

const sectionStyle = {
  position: 'relative', zIndex: 1,
  padding: 'clamp(32px,4vw,64px) clamp(20px,4vw,48px)',
  borderTop: `1px solid ${C.border}`,
}
