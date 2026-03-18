import { useState } from 'react'
import { C, mono, bebas } from '../styles/tokens'
import { useReveal } from '../hooks'
import { SectionTag, SectionTitle } from './UI'

const WS = [
  {
    num: 'WS — 01',
    title: 'Unified Annotation & Validation Workflow',
    body: 'Integrate key annotation and validation steps into a single workflow with consistent, standardised outputs (reports/tables; potentially format extensions), demonstrated on agreed case studies.',
  },
  {
    num: 'WS — 02',
    title: 'RNA prediction and non-Watson-Crick base pairs',
    body: 'Define or refine interoperable 2D + mmCIF representations of Watson-Crick and non-Watson-Crick base pairs, and use them to support benchmarking and case studies for prediction approaches.',
  },
]

export default function Workstreams() {
  const ref = useReveal()
  return (
    <section id="workstreams" style={sectionStyle}>
      <SectionTag>What we will work on</SectionTag>
      <SectionTitle>WORK<br />STREAMS</SectionTitle>
      <div className="reveal" ref={ref} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 2,
      }}>
        {WS.map((w, i) => <WSCard key={i} w={w} i={i} />)}
      </div>
    </section>
  )
}

function WSCard({ w, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? C.bg3 : C.bg2,
        padding: 'clamp(28px,3vw,48px)',
        border: `1px solid ${hovered ? C.borderHi : C.border}`,
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* Ghost number */}
      <div style={{
        ...bebas, position: 'absolute', top: -16, right: 20,
        fontSize: 'clamp(80px,12vw,120px)',
        color: 'rgba(0,229,255,0.04)', lineHeight: 1, pointerEvents: 'none',
        userSelect: 'none',
      }}>
        0{i + 1}
      </div>

      <div style={{ ...mono, fontSize: 11, color: C.teal, letterSpacing: '0.15em', marginBottom: 20 }}>
        {w.num}
      </div>
      <div style={{ ...bebas, fontSize: 'clamp(26px,3vw,36px)', color: C.white, lineHeight: 1.1, marginBottom: 20 }}>
        {w.title}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.75, color: C.mutedLight }}>{w.body}</p>

      {/* Accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: hovered ? '100%' : 0, height: 2,
        background: `linear-gradient(90deg, ${C.cyan}, ${C.teal})`,
        transition: 'width 0.4s ease',
      }} />
    </div>
  )
}

const sectionStyle = {
  position: 'relative', zIndex: 1,
  padding: 'clamp(48px,8vw,100px) clamp(20px,4vw,48px)',
  borderTop: `1px solid ${C.border}`,
}
