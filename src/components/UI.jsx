import { C, mono, bebas } from '../styles/tokens'

export function SectionTag({ children }) {
  return (
    <div style={{
      ...mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: C.cyan, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ display: 'inline-block', width: 20, height: 1, background: C.cyan }} />
      {children}
    </div>
  )
}

export function SectionTitle({ children, style }) {
  return (
    <h2 style={{
      ...bebas, fontSize: 'clamp(44px,6vw,80px)', lineHeight: 0.95,
      color: C.white, marginBottom: 40, ...style,
    }}>
      {children}
    </h2>
  )
}

export function Pill({ children, color = C.cyan, bg = C.cyanDark, border = C.cyanDim }) {
  return (
    <span style={{
      background: bg, border: `1px solid ${border}`, color,
      ...mono, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
      padding: '7px 16px', borderRadius: 2, display: 'inline-block',
    }}>
      {children}
    </span>
  )
}
